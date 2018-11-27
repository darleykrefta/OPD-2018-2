package br.edu.utfpr.pb.plataformaDoacao.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	
//	@GetMapping("filter/nome")
//	public Page<Cidade> findByNome(@RequestParam String nome){
//		return (Page<Cidade>) cidadeService.findByNomeLikeOrderByNomeDesc("%"+nome+"%");
//	}
	
	@GetMapping("filter/nome")
	public Page<Cidade> findByNomeLike(
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
		return cidadeService
				.findByNomeLike("%" + filter + "%", pageRequest);
	}
	
	
	
	@GetMapping("search/count")
	public long findByNomeLike(
			@RequestParam String filter) {
		
		return cidadeService
				.countByNomeLike("%" + filter + "%");
	}

}
