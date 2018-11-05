package br.edu.utfpr.pb.plataformaDoacao.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;


import br.edu.utfpr.pb.plataformaDoacao.model.Cidade;
import br.edu.utfpr.pb.plataformaDoacao.repository.CidadeRepository;
import br.edu.utfpr.pb.plataformaDoacao.service.CidadeService;

@Service
public class CidadeServiceImpl extends CrudServiceImpl<Cidade, Long> implements CidadeService {

	 @Autowired 
	 private CidadeRepository cidadeRepository;
	
	@Override
	protected JpaRepository<Cidade, Long> getRepository() {
		// TODO Auto-generated method stub
		return cidadeRepository;
	}

	@Override
	public List<Cidade> findByNomeLikeOrderByNomeDesc(String nome) {
		// TODO Auto-generated method stub
		return cidadeRepository.findByNomeLikeOrderByNomeDesc(nome);
	}

}
