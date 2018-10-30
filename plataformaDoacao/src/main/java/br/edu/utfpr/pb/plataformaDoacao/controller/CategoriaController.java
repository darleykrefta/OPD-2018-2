package br.edu.utfpr.pb.plataformaDoacao.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.plataformaDoacao.model.Categoria;
import br.edu.utfpr.pb.plataformaDoacao.service.CategoriaService;
import br.edu.utfpr.pb.plataformaDoacao.service.CrudService;

@RestController
@RequestMapping("/categoria")
public class CategoriaController extends CrudController<Categoria, Long> {

	
	@Autowired
	private CategoriaService categoriaService;
	
	@Valid
	@Override
	protected CrudService<Categoria, Long> getService() {
		
		return categoriaService;
	}

}
