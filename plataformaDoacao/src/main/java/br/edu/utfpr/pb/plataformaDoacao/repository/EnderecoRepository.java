package br.edu.utfpr.pb.plataformaDoacao.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.utfpr.pb.plataformaDoacao.model.Endereco;



public interface EnderecoRepository extends JpaRepository<Endereco, Long>{

	public List<Endereco> findByRuaLike(String rua);

}
