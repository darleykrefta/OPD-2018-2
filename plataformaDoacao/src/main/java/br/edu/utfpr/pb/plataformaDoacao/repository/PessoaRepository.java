package br.edu.utfpr.pb.plataformaDoacao.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.utfpr.pb.plataformaDoacao.model.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

}
