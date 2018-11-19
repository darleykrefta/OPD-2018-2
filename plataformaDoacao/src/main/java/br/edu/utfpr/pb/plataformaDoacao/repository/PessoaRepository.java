package br.edu.utfpr.pb.plataformaDoacao.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.utfpr.pb.plataformaDoacao.model.Pessoa;


public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
	
Page<Pessoa> findByNomeLikeOrCpfCnpjLike(String nome, String cpf_cnpj, Pageable pageable);
	
	long countByNomeLikeOrCpfCnpjLike(String nome, String cpf_cnpj);

}
