package br.edu.utfpr.pb.plataformaDoacao.service;

import java.util.List;

import br.edu.utfpr.pb.plataformaDoacao.model.Cidade;


public interface CidadeService  extends CrudService<Cidade, Long>{
	
	
	public List<Cidade> findByNomeLikeOrderByNomeDesc(String nome);

}
