package br.edu.utfpr.pb.plataformaDoacao.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.utfpr.pb.plataformaDoacao.model.Categoria;
import br.edu.utfpr.pb.plataformaDoacao.model.Cidade;

public interface CategoriaService extends CrudService<Categoria, Long>{

	
	Page<Categoria> findByNomeLike(String nome, Pageable pageable);
	
	
	long countByNomeLike(String nome);
}
