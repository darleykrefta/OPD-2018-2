package br.edu.utfpr.pb.plataformaDoacao.repository;

import org.springframework.data.repository.CrudRepository;

import br.edu.utfpr.pb.plataformaDoacao.model.Permissao;

public interface PermissaoRepository extends CrudRepository<Permissao, Long> {
	
	Permissao findByNome(String nome);

}
