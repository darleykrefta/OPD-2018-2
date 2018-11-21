package br.edu.utfpr.pb.plataformaDoacao.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.utfpr.pb.plataformaDoacao.model.Campanha;
import br.edu.utfpr.pb.plataformaDoacao.model.Mensagem;

public interface MensagemRepository extends JpaRepository<Mensagem, Long> {

	List<Mensagem> findByCampanhaId(Long id);
	

}
