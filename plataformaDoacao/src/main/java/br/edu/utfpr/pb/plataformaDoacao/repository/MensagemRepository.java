package br.edu.utfpr.pb.plataformaDoacao.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.utfpr.pb.plataformaDoacao.model.Mensagem;

public interface MensagemRepository extends JpaRepository<Mensagem, Long> {

}
