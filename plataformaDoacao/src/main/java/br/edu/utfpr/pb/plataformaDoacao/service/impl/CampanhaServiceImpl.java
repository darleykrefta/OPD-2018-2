package br.edu.utfpr.pb.plataformaDoacao.service.impl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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


	@Override
	public List<Campanha> findByPessoaId(Long id) {
		// TODO Auto-generated method stub
		return campanhaRepository.findByPessoaId(id);
	}

	@Transactional(readOnly = true)
	public List<Campanha> findByTituloLikeOrDescricaoLike(String titulo, String descricao) {
		return campanhaRepository.findByTituloLikeOrDescricaoLike(titulo, descricao);
	}


	@Override
	public List<Campanha> findByDataInicioBetweenOrCategoriaId(LocalDate dataIni, LocalDate dataFim, Long id) {
		return campanhaRepository.findByDataInicioBetweenOrCategoriaId(dataIni, dataFim, id);
	}


	@Override
	public List<Campanha> findByCategoriaId(Long id) {
		// TODO Auto-generated method stub
		return campanhaRepository.findByCategoriaId(id);
	}


	@Override
	public List<Campanha> findByDataInicioBetween(LocalDate dataIni, LocalDate dataFim) {
		// TODO Auto-generated method stub
		return campanhaRepository.findByDataInicioBetween(dataIni, dataFim);
	}

}
