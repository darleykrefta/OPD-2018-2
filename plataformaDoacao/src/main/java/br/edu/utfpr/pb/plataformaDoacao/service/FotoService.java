package br.edu.utfpr.pb.plataformaDoacao.service;

import java.util.List;

import br.edu.utfpr.pb.plataformaDoacao.model.Foto;

public interface FotoService extends CrudService<Foto, Long> {

	List<Foto> findByCampanhaId(Long id);
	
}
