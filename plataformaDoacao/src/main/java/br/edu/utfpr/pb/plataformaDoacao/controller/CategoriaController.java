package br.edu.utfpr.pb.plataformaDoacao.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.plataformaDoacao.model.Categoria;
import br.edu.utfpr.pb.plataformaDoacao.model.Cidade;
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
	
	@GetMapping("filter/nome")
	public Page<Categoria> findByNomeLike(
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
		return categoriaService
				.findByNomeLike("%" + filter + "%", pageRequest);
	}
	
	
	
	@GetMapping("search/count")
	public long findByNomeLike(
			@RequestParam String filter) {
		
		return categoriaService
				.countByNomeLike("%" + filter + "%");
	}

}
