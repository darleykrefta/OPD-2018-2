package br.edu.utfpr.pb.plataformaDoacao.service;


import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.utfpr.pb.plataformaDoacao.model.Cidade;
import br.edu.utfpr.pb.plataformaDoacao.model.Endereco;
import br.edu.utfpr.pb.plataformaDoacao.model.Mensagem;

public interface EnderecoService extends CrudService<Endereco, Long> {
	
	Page<Endereco> findByRuaLikeOrBairroLike(String rua, String bairro, Pageable pageable);

	long countByRuaLikeOrBairroLike(String rua, String bairro);

	List<Endereco> findAllByCampanhaId(String id);
		
}
