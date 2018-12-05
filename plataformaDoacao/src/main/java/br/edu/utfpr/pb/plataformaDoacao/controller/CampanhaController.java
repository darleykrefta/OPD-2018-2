package br.edu.utfpr.pb.plataformaDoacao.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.security.Principal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.edu.utfpr.pb.plataformaDoacao.model.Campanha;
import br.edu.utfpr.pb.plataformaDoacao.model.Foto;
import br.edu.utfpr.pb.plataformaDoacao.model.Mensagem;
import br.edu.utfpr.pb.plataformaDoacao.model.Pessoa;
import br.edu.utfpr.pb.plataformaDoacao.service.CampanhaService;
import br.edu.utfpr.pb.plataformaDoacao.service.CrudService;
import br.edu.utfpr.pb.plataformaDoacao.service.EnderecoService;
import br.edu.utfpr.pb.plataformaDoacao.service.FotoService;
import br.edu.utfpr.pb.plataformaDoacao.service.MensagemService;

@RestController
@RequestMapping("campanha")
public class CampanhaController extends CrudController<Campanha, Long> {

	@Autowired
	private CampanhaService campanhaService;

	@Autowired
	private FotoService fotoService;

	@Autowired
	private MensagemService mensagemService;
	
	@Autowired
	private EnderecoService enderecoService;

	@Override
	protected CrudService<Campanha, Long> getService() {
		return campanhaService;
	}

	@GetMapping("visualizaranuncio")
	public List<Mensagem> procurarMensagens(@RequestParam Long campanhaId) {
		return mensagemService.findByCampanhaId(campanhaId);
	}

	@GetMapping
	public List<Campanha> findAll() {
		return campanhaService.findAll();
	}

	@SuppressWarnings("unused")
	@GetMapping("search")
	public List<Campanha> findByDataInicioBetweenOrCategoriaId(@RequestParam(required = false) String dataIni,
			@RequestParam(required = false) String dataFim, @RequestParam(required = false) Long categoria) {

		if (dataIni != null && dataFim != null && categoria != null && dataIni != "" && dataFim != ""
				&& categoria != 0 ) {
			return campanhaService.findByDataInicioBetweenOrCategoriaId(
					LocalDate.parse(dataIni, DateTimeFormatter.ofPattern("dd/MM/yyyy")),
					LocalDate.parse(dataFim, DateTimeFormatter.ofPattern("dd/MM/yyyy")), Long.valueOf(categoria));
		} else if (dataIni != null && dataFim != null && dataIni != "" && dataFim != "" && categoria == 0
				&& categoria == null) {
			return campanhaService.findByDataInicioBetween(
					LocalDate.parse(dataIni, DateTimeFormatter.ofPattern("dd/MM/yyyy")),
					LocalDate.parse(dataFim, DateTimeFormatter.ofPattern("dd/MM/yyyy")));
		} else if (categoria != null && categoria != 0 && dataIni == "" && dataFim == "" && dataIni != null
				&& dataFim != null) {
			return campanhaService.findByCategoriaId(categoria);
		} else if (categoria == 0 && dataIni == "" && dataFim == "" ) {
			return campanhaService.findAll();
		}

		return null;
	}

	@PostMapping("upload/{id}")
	public void upload(@PathVariable Long id, @RequestParam("foto") MultipartFile[] listFoto,
			HttpServletRequest request) throws Exception {

		saveFile(id, listFoto, request);
	}

	private void saveFile(Long id, MultipartFile[] listFoto, HttpServletRequest request) throws Exception {
		File dir = new File(request.getServletContext().getRealPath("/images"));
		if (!dir.exists()) {
			dir.mkdirs();
		}

		List<Foto> listFotos = fotoService.findByCampanhaId(id);

		if (listFotos.size() > 0) {
			for (Foto item : listFotos) {
				fotoService.delete(item.getId());
			}
		}

		for (MultipartFile foto : listFoto) {
			
			File caminhoAnexo = new File("./src/main/webapp/images");
			
			String extensao = foto.getOriginalFilename().substring(foto.getOriginalFilename().lastIndexOf("."),
					foto.getOriginalFilename().length());
			String nomeArquivo = id + Math.random() + extensao;
			try {
				FileOutputStream fileOut = new FileOutputStream(new File(caminhoAnexo + "/" + nomeArquivo));
				BufferedOutputStream stream = new BufferedOutputStream(fileOut);
				stream.write(foto.getBytes());
				stream.close();

				Foto ft = new Foto();
				ft.setCaminhoFoto("images" + "\\" + nomeArquivo);
				Campanha campanha = new Campanha();
				campanha = getService().findOne(id);
				ft.setCampanha(campanha);
				fotoService.save(ft);

			} catch (Exception e) {
				e.printStackTrace();
				throw new Exception("Erro ao fazer" + "upload da imagem. " + e.getMessage());
			}
		}
	}
	
	@GetMapping("filter/meusanuncios")
	public List<Campanha> findByPessoaId(Principal principal){
		Pessoa p  = (Pessoa)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return campanhaService.findByPessoaId(p.getId());
	}
	

	@GetMapping("/finalizarAnuncio/{id}")
	public void findByIdCampanha(@PathVariable Long id) {
		Campanha campanha = getService().findOne(id);
		campanha.setStatus(false);
		getService().save(campanha);
	}
	
	@GetMapping("visualizaranuncio/{campanhaId}")
	public List<Foto> listaFotos(@PathVariable Long campanhaId) {
		return fotoService.findByCampanhaId(campanhaId);
	}
}
