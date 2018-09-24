package br.edu.utfpr.pb.plataformaDoacao.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.utfpr.pb.plataformaDoacao.model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long>{

	public List<Categoria> findByNomeLikeOrderById(String nome);

}
