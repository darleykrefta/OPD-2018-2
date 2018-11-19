package br.edu.utfpr.pb.plataformaDoacao.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import br.edu.utfpr.pb.plataformaDoacao.model.Pessoa;
import br.edu.utfpr.pb.plataformaDoacao.repository.PessoaRepository;

public interface PessoaService extends CrudService<Pessoa, Long> {
	
	List<Pessoa> findByEmailOrderById(String email);
	
	void criptografarSenha(Pessoa usuario);

}
