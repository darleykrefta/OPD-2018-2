package br.edu.utfpr.pb.plataformaDoacao.service;

import java.util.List;

import br.edu.utfpr.pb.plataformaDoacao.model.Campanha;
import br.edu.utfpr.pb.plataformaDoacao.model.Mensagem;

public interface MensagemService extends CrudService<Mensagem, Long> {
	
	List<Mensagem> findByCampanhaId(Long id);
	
	
	
}
