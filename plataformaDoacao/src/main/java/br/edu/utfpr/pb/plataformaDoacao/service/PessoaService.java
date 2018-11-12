package br.edu.utfpr.pb.plataformaDoacao.service;

import java.util.List;

import br.edu.utfpr.pb.plataformaDoacao.model.Pessoa;

public interface PessoaService extends CrudService<Pessoa, Long> {
	
	List<Pessoa> findByEmailLikeOrderById(String email);

}
