package br.edu.utfpr.pb.plataformaDoacao.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.edu.utfpr.pb.plataformaDoacao.model.Pessoa;
import br.edu.utfpr.pb.plataformaDoacao.model.ResetarSenhaToken;

public interface ResetarSenhaRepository 
				extends JpaRepository<ResetarSenhaToken, Long>{

	ResetarSenhaToken findByToken(String token);
	
	//ResetarSenhaToken findByEmail(String email);
	
	@Modifying(clearAutomatically = true)
    @Query("update Pessoa p set p.senha = :senha where p.id = :id")
    void atualizarSenha(@Param("senha") String senha, @Param("id") Long id);
}
