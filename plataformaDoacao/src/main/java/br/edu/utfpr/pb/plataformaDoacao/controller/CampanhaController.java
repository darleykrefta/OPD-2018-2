package br.edu.utfpr.pb.plataformaDoacao.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.plataformaDoacao.model.Campanha;
import br.edu.utfpr.pb.plataformaDoacao.service.CrudService;
import br.edu.utfpr.pb.plataformaDoacao.service.CampanhaService;

@RestController
@RequestMapping("campanha")
public class CampanhaController  extends CrudController<Campanha, Long> {

	@Autowired
	private CampanhaService campanhaService;

	@Override
	protected CrudService<Campanha, Long> getService() {
		return campanhaService;
	}
	
	
	
}
