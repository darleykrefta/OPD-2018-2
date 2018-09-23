package br.edu.utfpr.pb.plataformaDoacao.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.plataformaDoacao.model.Pessoa;
import br.edu.utfpr.pb.plataformaDoacao.service.PessoaService;

@RestController
@RequestMapping("/pessoa")
public class PessoaController{

	@Autowired
	private PessoaService pessoaService;
	
	@GetMapping
	public java.util.List<Pessoa> findAll(){
		return pessoaService.findAll();
	}

	@GetMapping("{id}")
	public Pessoa findOne(@PathVariable Long id) {
		return pessoaService.findOne(id);
	}
	
	@PostMapping
	public Pessoa save(@RequestBody @Valid Pessoa pessoa) {
		return pessoaService.save(pessoa);
	}
	
}
