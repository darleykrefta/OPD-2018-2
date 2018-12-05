package br.edu.utfpr.pb.plataformaDoacao.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import br.edu.utfpr.pb.plataformaDoacao.model.Pessoa;
import br.edu.utfpr.pb.plataformaDoacao.model.ResetarSenhaToken;
import br.edu.utfpr.pb.plataformaDoacao.repository.PessoaRepository;
import br.edu.utfpr.pb.plataformaDoacao.repository.ResetarSenhaRepository;
import br.edu.utfpr.pb.plataformaDoacao.service.ResetarSenhaService;

public class ResetarSenhaServiceImpl extends CrudServiceImpl <ResetarSenhaToken, Long> implements ResetarSenhaService {

	@Autowired
	private ResetarSenhaRepository resetarSenhaRepository;
	
	@Autowired
	private PessoaRepository pessoaRepository;
	
	@Override
	protected JpaRepository<ResetarSenhaToken, Long> getRepository() {
		return resetarSenhaRepository;
	}

	@Override
	public void criptografarSenha(Pessoa usuario) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		if (usuario.getId() == null) {
			usuario.setSenha(encoder.encode(usuario.getSenha()));
		} else {
			Pessoa antigo = pessoaRepository.findById(usuario.getId()).orElse(null);
			if (antigo != null && 
					!usuario.getSenha().equals(antigo.getSenha())) {
				usuario.setSenha(encoder.encode(usuario.getSenha()));
			}
		}
		
	}

	@Override
	public void atualizarSenha(String senha, Long id) {
		pessoaRepository.atualizarSenha(senha, id);
		
	}

	@Override
	public ResetarSenhaToken findByToken(String token) {
		return resetarSenhaRepository.findByToken(token);
	}
}



