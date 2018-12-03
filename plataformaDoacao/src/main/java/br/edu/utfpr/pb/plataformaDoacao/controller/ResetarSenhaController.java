package br.edu.utfpr.pb.plataformaDoacao.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.plataformaDoacao.dto.ResetarSenhaDto;
import br.edu.utfpr.pb.plataformaDoacao.model.Pessoa;
import br.edu.utfpr.pb.plataformaDoacao.model.ResetarSenhaToken;
import br.edu.utfpr.pb.plataformaDoacao.repository.ResetarSenhaRepository;
import br.edu.utfpr.pb.plataformaDoacao.service.PessoaService;

@RestController
@RequestMapping("reset-password")
public class ResetarSenhaController {

	@Autowired
	private PessoaService pessoaService;
	@Autowired
	private ResetarSenhaRepository tokenRepository;
	
	private static final BCryptPasswordEncoder bCrypt = new BCryptPasswordEncoder(10);

	@PostMapping()
	public boolean handlePasswordReset(@RequestBody @Valid ResetarSenhaDto resetarSenhaDto) {

		//System.out.println("S: " + resetarSenhaDto.getSenha());
		//System.out.println("T: " + resetarSenhaDto.getToken());
		
		try {
			ResetarSenhaToken token = tokenRepository.findByToken(resetarSenhaDto.getToken());
			
		
			Pessoa pessoa = token.getPessoa();
			String updatedPassword = bCrypt.encode(resetarSenhaDto.getSenha());
			
			pessoa.setSenha(updatedPassword);
			pessoaService.save(pessoa); //atualizarSenha(updatedPassword, pessoa.getId());
			tokenRepository.deleteById(token.getId());

			return true;
		} catch (Exception ex) {
			ex.printStackTrace();
			return false;
		}
	}
}