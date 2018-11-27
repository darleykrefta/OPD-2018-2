package br.edu.utfpr.pb.plataformaDoacao.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.utfpr.pb.plataformaDoacao.model.Categoria;
import br.edu.utfpr.pb.plataformaDoacao.model.Cidade;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

	// public List<Categoria> findByNomeLikeOrderById(String nome);

	Page<Categoria> findByNomeLike(String nome, Pageable pageable);

	long countByNomeLike(String nome);

}
