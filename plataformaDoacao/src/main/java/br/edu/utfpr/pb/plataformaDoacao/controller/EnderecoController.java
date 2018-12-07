package br.edu.utfpr.pb.plataformaDoacao.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.plataformaDoacao.model.Cidade;
import br.edu.utfpr.pb.plataformaDoacao.model.Endereco;
import br.edu.utfpr.pb.plataformaDoacao.model.Mensagem;
import br.edu.utfpr.pb.plataformaDoacao.service.CrudService;
import br.edu.utfpr.pb.plataformaDoacao.service.EnderecoService;

@RestController
@RequestMapping("endereco")
public class EnderecoController extends CrudController<Endereco, Long> {
	
	@Autowired
	private EnderecoService enderecoService;
	
	@Valid
	@Override
	protected CrudService<Endereco, Long> getService() {
		return enderecoService;
	}
	
	@GetMapping("filter/nome")
	public Page<Endereco> findByRuaLikeOrBairroLike(
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
		return enderecoService
				.findByRuaLikeOrBairroLike("%" + filter + "%" , "%" + filter + "%", pageRequest);
	}
	
	@GetMapping("search/count")
	public long findByRuaLikeOrBairroLike(
			@RequestParam String filter) {
		
		return enderecoService
				.countByRuaLikeOrBairroLike("%" + filter + "%" , "%" + filter + "%");
	}
	
	//@GetMapping("filter/enderecoCampanha/{id}")
	//@Query("select t from endereco t join campanha_doacao_endereco u where u.campanha_id_doacao = :id")
	//List<Endereco> findAllByCampanhaId(@Param("id") String id) {
	//	return enderecoService.findAllByCampanhaId(id);
	//}
	
}
