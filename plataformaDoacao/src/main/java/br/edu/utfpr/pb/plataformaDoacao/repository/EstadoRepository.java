package br.edu.utfpr.pb.plataformaDoacao.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.utfpr.pb.plataformaDoacao.model.Estado;

public interface EstadoRepository extends JpaRepository<Estado, Long>{

	public List<Estado> findByNomeLikeOrderById(String nome);	
}
