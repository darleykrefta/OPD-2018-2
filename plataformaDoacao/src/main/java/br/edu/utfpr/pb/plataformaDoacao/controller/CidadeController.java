package br.edu.utfpr.pb.plataformaDoacao.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.plataformaDoacao.model.Cidade;
import br.edu.utfpr.pb.plataformaDoacao.service.CidadeService;
import br.edu.utfpr.pb.plataformaDoacao.service.CrudService;


@RestController
@RequestMapping("cidade")
public class CidadeController extends CrudController<Cidade, Long> {

	@Autowired
	private CidadeService cidadeService;
	
	@Valid
	@Override
	protected CrudService<Cidade, Long> getService() {
		// TODO Auto-generated method stub
		return cidadeService;
	}

}
