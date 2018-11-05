package br.edu.utfpr.pb.plataformaDoacao.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	
	
	
}
