package br.edu.utfpr.pb.plataformaDoacao.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.edu.utfpr.pb.plataformaDoacao.model.Cidade;
import br.edu.utfpr.pb.plataformaDoacao.model.Endereco;
import br.edu.utfpr.pb.plataformaDoacao.model.Mensagem;
import br.edu.utfpr.pb.plataformaDoacao.repository.EnderecoRepository;
import br.edu.utfpr.pb.plataformaDoacao.service.EnderecoService;


@Service
public class EnderecoServiceImpl extends CrudServiceImpl<Endereco, Long> implements EnderecoService{

	@Autowired
	private EnderecoRepository enderecoRepository;
	
	@Override
	protected JpaRepository<Endereco, Long> getRepository() {
		// TODO Auto-generated method stub
		return enderecoRepository;
	}

	@Override
	public Page<Endereco> findByRuaLikeOrBairroLike(String rua, String bairro, Pageable pageable) {
		
		return enderecoRepository.findByRuaLikeOrBairroLike(rua, bairro, pageable);
	}
	
	@Override
	public long countByRuaLikeOrBairroLike(String rua, String bairro) {
		return enderecoRepository.countByRuaLikeOrBairroLike(rua, bairro);
	}

	@Override
	public List<Endereco> findAllByCampanhaId(String id) {
		return enderecoRepository.findAllByCampanhaId(id);
	}

}
