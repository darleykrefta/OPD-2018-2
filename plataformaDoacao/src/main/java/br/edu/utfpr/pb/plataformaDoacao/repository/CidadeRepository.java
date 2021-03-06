package br.edu.utfpr.pb.plataformaDoacao.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.utfpr.pb.plataformaDoacao.model.Cidade;

public interface CidadeRepository extends JpaRepository<Cidade, Long>{

	//List<Cidade> findByNomeLikeOrderByNomeDesc(String nome);

	Page<Cidade> findByNomeLike(String nome, Pageable pageable);
	
	long countByNomeLike(String nome);
}
