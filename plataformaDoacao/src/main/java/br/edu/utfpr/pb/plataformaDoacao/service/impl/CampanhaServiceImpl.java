package br.edu.utfpr.pb.plataformaDoacao.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.edu.utfpr.pb.plataformaDoacao.model.Campanha;
import br.edu.utfpr.pb.plataformaDoacao.repository.CampanhaRepository;
import br.edu.utfpr.pb.plataformaDoacao.service.CampanhaService;

@Service
public class CampanhaServiceImpl extends CrudServiceImpl <Campanha, Long> implements CampanhaService {

	@Autowired
	private CampanhaRepository campanhaRepository;
	
	
	@Override
	protected JpaRepository<Campanha, Long> getRepository() {
		// TODO Auto-generated method stub
		return campanhaRepository;
	}

}
