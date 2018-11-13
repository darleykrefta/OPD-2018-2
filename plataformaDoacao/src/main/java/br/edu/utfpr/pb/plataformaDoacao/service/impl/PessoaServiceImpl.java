package br.edu.utfpr.pb.plataformaDoacao.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

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
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return pessoaRepository.findByEmail(s).orElseThrow(() -> new UsernameNotFoundException("Usuario não encontrado!"));
    }
    
    @Override
    public Iterable<Pessoa> save(Iterable<Pessoa> iterable) {
    	return super.save(iterable);
    }

}
