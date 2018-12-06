package br.edu.utfpr.pb.plataformaDoacao.service;

import br.edu.utfpr.pb.plataformaDoacao.model.Pessoa;
import br.edu.utfpr.pb.plataformaDoacao.model.ResetarSenhaToken;

public interface ResetarSenhaService extends CrudService<ResetarSenhaToken, Long> {

	ResetarSenhaToken findByToken (String token);

	void atualizarSenha(String senha, Long pessoaId);
	
	void criptografarSenha(Pessoa usuario);
}
