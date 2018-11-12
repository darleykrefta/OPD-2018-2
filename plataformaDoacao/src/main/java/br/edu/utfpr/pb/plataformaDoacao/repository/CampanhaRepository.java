package br.edu.utfpr.pb.plataformaDoacao.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.utfpr.pb.plataformaDoacao.model.Campanha;

public interface CampanhaRepository extends JpaRepository<Campanha, Long> {
	

}
