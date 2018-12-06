package br.edu.utfpr.pb.plataformaDoacao.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.edu.utfpr.pb.plataformaDoacao.model.Pessoa;




public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
	
	Page<Pessoa> findByNomeLikeOrCpfCnpjLike(String nome, String cpf_cnpj, Pageable pageable);
	
	//Optional<Pessoa> findByEmail(String email);
	
	Pessoa findByEmail(String email);

	long countByNomeLikeOrCpfCnpjLike(String nome, String cpf_cnpj);
  
	List<Pessoa> findByEmailOrderById(String email);

	@Modifying(clearAutomatically = true)
    @Query("update Pessoa p set p.senha = :senha where p.id = :id")
    void atualizarSenha(@Param("senha") String senha, @Param("id") Long id);

}
