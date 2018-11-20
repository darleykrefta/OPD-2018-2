package br.edu.utfpr.pb.plataformaDoacao.service;

import java.util.List;

import org.springframework.data.repository.query.Param;

import br.edu.utfpr.pb.plataformaDoacao.model.EnderecoCampanha;

public interface EnderecoCampanhaService extends CrudService<EnderecoCampanha, Long> {

//	public List<EnderecoCampanha> findByEnderecoIdWhereCampanhaIdEqual(Long id);
	public List<EnderecoCampanha> findByCampanhaId(Long id);

}
