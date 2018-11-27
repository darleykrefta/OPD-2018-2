package br.edu.utfpr.pb.plataformaDoacao.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.plataformaDoacao.model.Mensagem;
import br.edu.utfpr.pb.plataformaDoacao.service.CrudService;
import br.edu.utfpr.pb.plataformaDoacao.service.MensagemService;

@RestController
@RequestMapping("mensagem")
public class MensagemController  extends CrudController<Mensagem, Long> {

	@Autowired
	private MensagemService mensagemService;

	@Override
	protected CrudService<Mensagem, Long> getService() {
		return mensagemService;
	}
	
	
	@GetMapping("visualizaranuncio/{campanhaId}")
	public List<Mensagem> procurarMensagens(@PathVariable Long campanhaId) {
		return mensagemService.findByCampanhaId(campanhaId);
	}
	
}
