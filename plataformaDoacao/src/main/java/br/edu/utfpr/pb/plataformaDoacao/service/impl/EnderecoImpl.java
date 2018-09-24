package br.edu.utfpr.pb.plataformaDoacao.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.edu.utfpr.pb.plataformaDoacao.model.Endereco;
import br.edu.utfpr.pb.plataformaDoacao.repository.EnderecoRepository;
import br.edu.utfpr.pb.plataformaDoacao.service.EnderecoService;

@Service
public class EnderecoImpl extends CrudServiceImpl<Endereco, Long> implements EnderecoService{

	@Autowired
	private EnderecoRepository enderecoRepository;
	
	
	@Override
	protected JpaRepository<Endereco, Long> getRepository() {
		// TODO Auto-generated method stub
		return enderecoRepository;
	}
	
	
	
	
	

}
