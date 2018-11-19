package br.edu.utfpr.pb.plataformaDoacao.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.utfpr.pb.plataformaDoacao.model.Pessoa;

public interface PessoaService extends CrudService<Pessoa, Long> {

	Page<Pessoa> findByNomeLikeOrCpfCnpjLike(String nome, String cpf_cnpj, Pageable pageable);

	long countByNomeLikeOrCpfCnpjLike(String nome, String cpf_cnpj);

	

}
