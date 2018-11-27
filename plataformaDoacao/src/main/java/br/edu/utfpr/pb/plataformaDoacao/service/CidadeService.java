package br.edu.utfpr.pb.plataformaDoacao.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.utfpr.pb.plataformaDoacao.model.Cidade;


public interface CidadeService  extends CrudService<Cidade, Long>{
	
	Page<Cidade> findByNomeLike(String nome, Pageable pageable);
	//public List<Cidade> findByNomeLikeOrderByNomeDesc(String nome);
	
	long countByNomeLike(String nome);

}
