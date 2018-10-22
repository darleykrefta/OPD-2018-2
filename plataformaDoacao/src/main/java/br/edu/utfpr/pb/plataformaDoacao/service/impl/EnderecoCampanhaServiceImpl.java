package br.edu.utfpr.pb.plataformaDoacao.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.edu.utfpr.pb.plataformaDoacao.model.EnderecoCampanha;
import br.edu.utfpr.pb.plataformaDoacao.repository.EnderecoCampanhaRepository;
import br.edu.utfpr.pb.plataformaDoacao.service.EnderecoCampanhaService;

@Service
public class EnderecoCampanhaServiceImpl extends CrudServiceImpl <EnderecoCampanha, Long> implements EnderecoCampanhaService {

	@Autowired
	private EnderecoCampanhaRepository enderecoCampanhaRepository;
	
	
	@Override
	protected JpaRepository<EnderecoCampanha, Long> getRepository() {
		return enderecoCampanhaRepository;
	}

}
