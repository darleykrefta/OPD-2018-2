package br.edu.utfpr.pb.plataformaDoacao.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.plataformaDoacao.model.Mail;
import br.edu.utfpr.pb.plataformaDoacao.model.Pessoa;
import br.edu.utfpr.pb.plataformaDoacao.model.ResetarSenhaToken;
import br.edu.utfpr.pb.plataformaDoacao.repository.ResetarSenhaRepository;
import br.edu.utfpr.pb.plataformaDoacao.service.EmailService;
import br.edu.utfpr.pb.plataformaDoacao.service.PessoaService;

@RestController
@RequestMapping("esqueci-senha")
public class EsqueciSenhaController {

	@Autowired
	private PessoaService pessoaService;
	@Autowired
	private ResetarSenhaRepository tokenRepository;
	@Autowired
	private EmailService emailService;

	@GetMapping("email")
	public boolean processForgotPasswordForm(@RequestParam String email) {

		try {

			Pessoa pessoa = pessoaService.findByEmail(email);
			if (pessoa == null) {
				return Boolean.FALSE;
			}

			ResetarSenhaToken token = new ResetarSenhaToken();
			token.setToken(UUID.randomUUID().toString());
			token.setUser(pessoa);
			token.setDataExpiracao(30);
			tokenRepository.save(token);

			Mail mail = new Mail();
			mail.setFrom("plataformadedoacoes@gmail.com");
			mail.setTo(pessoa.getEmail());
			mail.setSubject("Requisição de alteração de senha");

			Map<String, Object> model = new HashMap<>();
			model.put("token", token);
			model.put("pessoa", pessoa);
			model.put("signature", "https://plataformadedoacoes.com");
			model.put("resetUrl", "http://localhost:4200/reset-password/" + token.getToken());
			mail.setModel(model);
			emailService.sendEmail(mail);
			return Boolean.TRUE;
		} catch (Exception ex) {
			ex.printStackTrace();
			return Boolean.FALSE;
		}

	}
}