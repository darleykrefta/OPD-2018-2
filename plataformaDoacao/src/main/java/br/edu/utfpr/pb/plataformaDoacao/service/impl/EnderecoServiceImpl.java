package br.edu.utfpr.pb.plataformaDoacao.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.edu.utfpr.pb.plataformaDoacao.model.Endereco;
import br.edu.utfpr.pb.plataformaDoacao.repository.EnderecoRepository;
import br.edu.utfpr.pb.plataformaDoacao.service.EnderecoService;


@Service
public class EnderecoServiceImpl extends CrudServiceImpl<Endereco, Long> implements EnderecoService{

	@Autowired
	private EnderecoRepository enderecoRepository;
	
	

	@Override
	public Page<Endereco> findByRuaLikeOrBairroLike(String rua, String bairro, Pageable pageable) {
		// TODO Auto-generated method stub
		return enderecoRepository.findByRuaLikeOrBairroLike(rua, bairro, pageable);
	}


	@Override
	public long countByRuaLikeOrBairroLike(String rua, String bairro) {
		// TODO Auto-generated method stub
		return enderecoRepository.countByRuaLikeOrBairroLike(rua, bairro);
	}


	@Override
	protected JpaRepository<Endereco, Long> getRepository() {
		// TODO Auto-generated method stub
		return enderecoRepository;
	}

	
	

}
