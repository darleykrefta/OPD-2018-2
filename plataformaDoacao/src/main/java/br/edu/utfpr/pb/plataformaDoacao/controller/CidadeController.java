package br.edu.utfpr.pb.plataformaDoacao.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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
	
	@GetMapping("filter/nome")
	public List<Cidade> findByNome(@RequestParam String nome){
		return cidadeService.findByNomeLikeOrderByDesc("%"+nome+"%");
	}

}
