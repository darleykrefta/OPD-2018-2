package br.edu.utfpr.pb.plataformaDoacao.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.edu.utfpr.pb.plataformaDoacao.model.Categoria;
import br.edu.utfpr.pb.plataformaDoacao.model.Cidade;
import br.edu.utfpr.pb.plataformaDoacao.repository.CategoriaRepository;
import br.edu.utfpr.pb.plataformaDoacao.service.CategoriaService;

@Service
public class CategoriaServiceImpl extends CrudServiceImpl<Categoria, Long> implements CategoriaService{

	@Autowired
	private CategoriaRepository categoriaRepository;
	
	@Override
	protected JpaRepository<Categoria, Long> getRepository() {
		// TODO Auto-generated method stub
		return categoriaRepository;
	}
	
	@Override
	public Page<Categoria> findByNomeLike(String nome, Pageable pageable) {
		
		return categoriaRepository.findByNomeLike(nome, pageable);
	}
	
	@Override
	public long countByNomeLike(String nome) {
		return categoriaRepository.countByNomeLike(nome);
	}

}
