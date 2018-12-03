package br.edu.utfpr.pb.plataformaDoacao.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.edu.utfpr.pb.plataformaDoacao.model.Pessoa;
import br.edu.utfpr.pb.plataformaDoacao.repository.PessoaRepository;
import br.edu.utfpr.pb.plataformaDoacao.service.PessoaService;

@Service
public class PessoaServiceImpl extends CrudServiceImpl <Pessoa, Long> implements PessoaService,UserDetailsService{

	@Autowired
	private PessoaRepository pessoaRepository;
	
	
	@Override
	protected JpaRepository<Pessoa, Long> getRepository() {
		return pessoaRepository;
	}
	

    
    @Override
    public Iterable<Pessoa> save(Iterable<Pessoa> iterable) {
    	return super.save(iterable);
    }


	@Override
	public List<Pessoa> findByEmailOrderById(String email) {
		// TODO Auto-generated method stub
		return pessoaRepository.findByEmailOrderById(email);
	}

	@Override
	public void criptografarSenha(Pessoa usuario) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		if (usuario.getId() == null) {
			usuario.setSenha(encoder.encode(usuario.getSenha()));
		} else {
			Pessoa antigo = pessoaRepository.findById(usuario.getId()).orElse(null);
			if (antigo != null && 
					!usuario.getSenha().equals(antigo.getSenha())) {
				usuario.setSenha(encoder.encode(usuario.getSenha()));
			}
		}
	}


	@Override
	public Page<Pessoa> findByNomeLikeOrCpfCnpjLike(String nome, String cpf_cnpj, Pageable pageable) {
		return pessoaRepository.findByNomeLikeOrCpfCnpjLike(nome, cpf_cnpj, pageable);
	}


	@Override
	public long countByNomeLikeOrCpfCnpjLike(String nome, String cpf_cnpj) {
		return pessoaRepository.countByNomeLikeOrCpfCnpjLike(nome, cpf_cnpj);
	}

	@Override
	@Transactional
	public void atualizarSenha(String senha, Long id) {
		pessoaRepository.atualizarSenha(senha, id);
		
	}



	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		
		return pessoaRepository.findByEmail(email);
	}



	@Override
	public Pessoa findByEmail(String email) {
		return pessoaRepository.findByEmail(email);
	}

}
