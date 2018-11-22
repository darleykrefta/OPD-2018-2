package br.edu.utfpr.pb.plataformaDoacao.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.edu.utfpr.pb.plataformaDoacao.model.Cidade;
import br.edu.utfpr.pb.plataformaDoacao.model.Pessoa;
import br.edu.utfpr.pb.plataformaDoacao.service.CrudService;
import br.edu.utfpr.pb.plataformaDoacao.service.PessoaService;



@RestController
@RequestMapping("pessoa")
public class PessoaController  extends CrudController<Pessoa, Long> {

	@Autowired
	private PessoaService pessoaService;

	@Override
	protected CrudService<Pessoa, Long> getService() {
		return pessoaService;
	}
	
	@GetMapping("search")
	public Page<Pessoa> findByNomeLike(
			@RequestParam String filter,
			@RequestParam int page,
			@RequestParam int size,
			@RequestParam(required = false) String order,
			@RequestParam(required = false) Boolean asc){
			PageRequest pageRequest = 
					PageRequest.of(page, size);
			if (order != null && asc != null) {
				PageRequest.of(page, size, 
						asc ? Sort.Direction.ASC :
							Sort.Direction.DESC, 
							order);
			}
		return pessoaService
				.findByNomeLikeOrCpfCnpjLike("%" + filter + "%", "%" + filter + "%", pageRequest);
	}
	
	@GetMapping("search/count")
	public long findByNomeLike(
			@RequestParam String filter) {
		
		return pessoaService
				.countByNomeLikeOrCpfCnpjLike("%" + filter + "%", "%" + filter + "%");
    	}
  
	@Override
	public Pessoa save(@RequestBody @Valid Pessoa entity) {
		pessoaService.criptografarSenha(entity);
		return super.save(entity);
	}
	
	@PostMapping("upload/{id}")
	public void upload(@PathVariable Long id, 
			@RequestParam("foto") MultipartFile foto,	
			HttpServletRequest request) throws Exception {
		
		if(foto != null) {
			saveFile(id, foto, request);
		}
	}
	

	private void saveFile(Long id, MultipartFile foto, HttpServletRequest request) throws Exception {
		File dir = new File(request.getServletContext().getRealPath("/images/"));
		if(!dir.exists()) {
			dir.mkdirs();
				
			}
			String caminhoAnexo = request.getServletContext()
					.getRealPath("images/");
			String extensao = foto.getOriginalFilename().substring(foto.getOriginalFilename().lastIndexOf("."),
					foto.getOriginalFilename().length());
					String nomeArquivo = id + extensao;
			try {
				FileOutputStream fileOut = new FileOutputStream(new File(caminhoAnexo+nomeArquivo));
				BufferedOutputStream stream = new BufferedOutputStream(fileOut);
				stream.write(foto.getBytes());
				stream.close();
				
				Pessoa pessoa = getService().findOne(id);
				pessoa.setFoto(nomeArquivo);
				getService().save(pessoa);
			} catch (Exception e) {
				e.printStackTrace();
				throw new Exception("Erro ao fazer"
						+ "upload da imagem. " +
						e.getMessage());
			}		
		}
	
	@GetMapping("filter/email")
	public boolean findByEmail(@RequestParam String email){
		return pessoaService.findByEmailOrderById(email).size() > 0;
	}
		
}