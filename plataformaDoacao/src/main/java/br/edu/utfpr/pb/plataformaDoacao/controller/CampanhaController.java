package br.edu.utfpr.pb.plataformaDoacao.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.plataformaDoacao.model.Campanha;
import br.edu.utfpr.pb.plataformaDoacao.model.Mensagem;
import br.edu.utfpr.pb.plataformaDoacao.service.CrudService;
import br.edu.utfpr.pb.plataformaDoacao.service.MensagemService;
import br.edu.utfpr.pb.plataformaDoacao.service.CampanhaService;

@RestController
@RequestMapping("campanha")
public class CampanhaController extends CrudController<Campanha, Long> {

	@Autowired
	private CampanhaService campanhaService;

	@Autowired
	private MensagemService mensagemService;

	@Override
	protected CrudService<Campanha, Long> getService() {
		return campanhaService;
	}

	@GetMapping("visualizaranuncio")
	public List<Mensagem> procurarMensagens(@RequestParam Long campanhaId) {
		return mensagemService.findByCampanhaId(campanhaId);
	}
	
	

}
