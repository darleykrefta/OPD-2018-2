package br.edu.utfpr.pb.plataformaDoacao.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import br.edu.utfpr.pb.plataformaDoacao.model.Categoria;
import br.edu.utfpr.pb.plataformaDoacao.repository.CategoriaRepository;
import br.edu.utfpr.pb.plataformaDoacao.service.CategoriaService;
import br.edu.utfpr.pb.plataformaDoacao.service.CrudService;

@Controller
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
