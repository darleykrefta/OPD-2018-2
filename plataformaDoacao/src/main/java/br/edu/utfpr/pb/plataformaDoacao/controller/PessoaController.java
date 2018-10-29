package br.edu.utfpr.pb.plataformaDoacao.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
	
	@PostMapping("upload/{id}")
	public void upload(@PathVariable Long id, @RequestParam("imagem") MultipartFile imagem,	HttpServletRequest request) {
		if(imagem != null) {
			try {
				saveFile(id, imagem, request);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			};
		}
	}
	

	private void saveFile(Long id, MultipartFile imagem, HttpServletRequest request) throws Exception {
		File dir = new File(request.getServletContext().getRealPath("/images/"));
		if(!dir.exists()) {
			dir.mkdirs();
				
			}
			String caminhoAnexo = request.getServletContext()
					.getRealPath("images/");
			String extensao = imagem.getOriginalFilename().substring(imagem.getOriginalFilename().lastIndexOf("."),
					imagem.getOriginalFilename().length());
					String nomeArquivo = id + extensao;
			try {
				FileOutputStream fileOut = new FileOutputStream(new File(caminhoAnexo+nomeArquivo));
				BufferedOutputStream stream = new BufferedOutputStream(fileOut);
				stream.write(imagem.getBytes());
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
		
	}
