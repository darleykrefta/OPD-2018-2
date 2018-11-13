package br.edu.utfpr.pb.plataformaDoacao.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.utfpr.pb.plataformaDoacao.model.Campanha;

public interface CampanhaRepository extends JpaRepository<Campanha, Long> {
	
	List<Campanha> findByPessoaId(Long id);
	

}
