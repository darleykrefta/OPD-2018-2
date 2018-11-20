package br.edu.utfpr.pb.plataformaDoacao.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.edu.utfpr.pb.plataformaDoacao.model.EnderecoCampanha;

public interface EnderecoCampanhaRepository extends JpaRepository<EnderecoCampanha, Long> {

//	SELECT id_endereco FROM endereco_campanha where id_doacao = 3
	//@Query("SELECT e FROM EnderecoCampanha e WHERE e.campanha.id = :id") 
    List<EnderecoCampanha> findByCampanhaId(Long id);

}
