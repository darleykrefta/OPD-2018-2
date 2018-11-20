package br.edu.utfpr.pb.plataformaDoacao.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import br.edu.utfpr.pb.plataformaDoacao.model.Mensagem;
import br.edu.utfpr.pb.plataformaDoacao.repository.MensagemRepository;
import br.edu.utfpr.pb.plataformaDoacao.service.MensagemService;

@Service
public class MensagemServiceImpl extends CrudServiceImpl <Mensagem, Long> implements MensagemService {

	@Autowired
	private MensagemRepository mensagemRepository;
	
	
	@Override
	protected JpaRepository<Mensagem, Long> getRepository() {
		// TODO Auto-generated method stub
		return mensagemRepository;
	}


	@Override
	public List<Mensagem> findByCampanhaId(Long id) {
		return mensagemRepository.findByCampanhaId(id);
	}

}
