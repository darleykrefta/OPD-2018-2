package br.edu.utfpr.pb.plataformaDoacao.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.utfpr.pb.plataformaDoacao.model.Campanha;

public interface CampanhaRepository extends JpaRepository<Campanha, Long> {
	
	List<Campanha> findByPessoaId(Long id);
		
	List<Campanha> findByTituloLikeOrDescricaoLike(String titulo, String descricao);

	List<Campanha> findByDataInicioBetweenOrCategoriaId(LocalDate dataIni, LocalDate dataFim, Long id);

	List<Campanha> findByCategoriaId(Long id);
	
	List<Campanha> findByDataInicioBetween(LocalDate dataIni, LocalDate dataFim);
	
}
