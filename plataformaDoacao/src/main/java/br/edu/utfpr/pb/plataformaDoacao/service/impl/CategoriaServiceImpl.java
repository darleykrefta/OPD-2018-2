package br.edu.utfpr.pb.plataformaDoacao.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.utfpr.pb.plataformaDoacao.model.Categoria;
import br.edu.utfpr.pb.plataformaDoacao.repository.CategoriaRepository;
import br.edu.utfpr.pb.plataformaDoacao.service.CategoriaService;

public class CategoriaServiceImpl extends CrudServiceImpl<Categoria, Long> implements CategoriaService{

	@Autowired
	private CategoriaRepository categoriaRepository;
	
	@Override
	protected JpaRepository<Categoria, Long> getRepository() {
		// TODO Auto-generated method stub
		return categoriaRepository;
	}

}
