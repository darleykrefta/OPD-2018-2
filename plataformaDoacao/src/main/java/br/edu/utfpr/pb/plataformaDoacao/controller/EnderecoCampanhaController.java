package br.edu.utfpr.pb.plataformaDoacao.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.plataformaDoacao.model.EnderecoCampanha;
import br.edu.utfpr.pb.plataformaDoacao.service.CrudService;
import br.edu.utfpr.pb.plataformaDoacao.service.EnderecoCampanhaService;

@RestController
@RequestMapping("enderecoCampanha")
public class EnderecoCampanhaController  extends CrudController<EnderecoCampanha, Long> {

	@Autowired
	private EnderecoCampanhaService enderecoCampanhaService;

	@Override
	protected CrudService<EnderecoCampanha, Long> getService() {
		return enderecoCampanhaService;
	}
	
	
	
}
