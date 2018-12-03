package br.edu.utfpr.pb.plataformaDoacao.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import br.edu.utfpr.pb.plataformaDoacao.model.ResetarSenhaToken;

public interface ResetarSenhaRepository 
				extends JpaRepository<ResetarSenhaToken, Long>{

	ResetarSenhaToken findByToken(String token);
}
