package br.edu.utfpr.pb.plataformaDoacao.service;

	


import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.utfpr.pb.plataformaDoacao.model.Campanha;

public interface CampanhaService extends CrudService<Campanha, Long> {
 
	List<Campanha> findByTituloLikeOrDescricaoLike(String titulo, String descricao);

	List<Campanha> findByDataInicioBetweenOrCategoriaId(LocalDate dataIni, LocalDate dataFim, Long id);

	List<Campanha> findByCategoriaId(Long id);
	
	List<Campanha> findByDataInicioBetween(LocalDate dataIni, LocalDate dataFim);

	List<Campanha> findByPessoaId(Long id);
}
