package br.edu.utfpr.pb.plataformaDoacao.service;

import java.util.List;

import br.edu.utfpr.pb.plataformaDoacao.model.Campanha;

public interface CampanhaService extends CrudService<Campanha, Long> {
	

	List<Campanha> findByPessoaId(Long id);

}
