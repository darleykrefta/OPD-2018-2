package br.edu.utfpr.pb.plataformaDoacao.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.edu.utfpr.pb.plataformaDoacao.model.Pessoa;
import br.edu.utfpr.pb.plataformaDoacao.repository.PessoaRepository;
import br.edu.utfpr.pb.plataformaDoacao.service.PessoaService;

@Service
public class PessoaServiceImpl extends CrudServiceImpl <Pessoa, Long> implements PessoaService {

	@Autowired
	private PessoaRepository pessoaRepository;
	
	
	@Override
	protected JpaRepository<Pessoa, Long> getRepository() {
		return pessoaRepository;
	}


	@Override
	public List<Pessoa> findByEmailLikeOrderById(String email) {
		// TODO Auto-generated method stub
		return pessoaRepository.findByEmailLikeOrderById(email);
	}

}
