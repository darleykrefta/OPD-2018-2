package br.edu.utfpr.pb.plataformaDoacao.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


import br.edu.utfpr.pb.plataformaDoacao.model.Pessoa;
import br.edu.utfpr.pb.plataformaDoacao.repository.PessoaRepository;
import br.edu.utfpr.pb.plataformaDoacao.model.Pessoa;

public interface PessoaService extends CrudService<Pessoa, Long> {
	
	List<Pessoa> findByEmailOrderById(String email);
	
	void criptografarSenha(Pessoa usuario);

	Page<Pessoa> findByNomeLikeOrCpfCnpjLike(String nome, String cpf_cnpj, Pageable pageable);

	long countByNomeLikeOrCpfCnpjLike(String nome, String cpf_cnpj);
	
	Pessoa findByEmail(String email);

	void atualizarSenha(String senha, Long pessoaId);
	

}
