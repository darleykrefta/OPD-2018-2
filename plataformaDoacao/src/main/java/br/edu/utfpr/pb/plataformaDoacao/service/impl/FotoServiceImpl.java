package br.edu.utfpr.pb.plataformaDoacao.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.edu.utfpr.pb.plataformaDoacao.model.Foto;
import br.edu.utfpr.pb.plataformaDoacao.repository.FotoRepository;
import br.edu.utfpr.pb.plataformaDoacao.service.FotoService;

@Service
public class FotoServiceImpl extends CrudServiceImpl <Foto, Long> implements FotoService {

	@Autowired
	private FotoRepository fotoRepository;
	
	
	@Override
	protected JpaRepository<Foto, Long> getRepository() {
		// TODO Auto-generated method stub
		return fotoRepository;
	}

}
