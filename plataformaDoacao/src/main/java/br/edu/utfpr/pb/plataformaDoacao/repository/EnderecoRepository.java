package br.edu.utfpr.pb.plataformaDoacao.repository;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import br.edu.utfpr.pb.plataformaDoacao.model.Endereco;

public interface EnderecoRepository extends JpaRepository<Endereco, Long> {

	Page<Endereco> findByRuaLikeOrBairroLike(String rua, String bairro, Pageable pageable);

	long countByRuaLikeOrBairroLike(String rua, String bairro);


}
