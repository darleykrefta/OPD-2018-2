package br.edu.utfpr.pb.plataformaDoacao.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import br.edu.utfpr.pb.plataformaDoacao.model.Endereco;
import br.edu.utfpr.pb.plataformaDoacao.repository.CidadeRepository;
import br.edu.utfpr.pb.plataformaDoacao.repository.EnderecoRepository;
import br.edu.utfpr.pb.plataformaDoacao.service.CrudService;
import br.edu.utfpr.pb.plataformaDoacao.service.EnderecoService;

@Controller
@RequestMapping("/endereco")
public class EnderecoController extends CrudController<Endereco, Long> {

	@Autowired
	private EnderecoRepository enderecoRepository;
	
	@Autowired
	private CidadeRepository cidadeRepository;
	
	@Autowired
	private EnderecoService enderecoService;
	
	@GetMapping(value="/")
	public String listar(Model model) {
		model.addAttribute("enderecos", enderecoRepository.findAll());
		return "endereco/list";
	}
	
	@GetMapping(value="/form")
	public String novo(Model model) {
		model.addAttribute("cidades", cidadeRepository.findAll());
		model.addAttribute("endereco", new Endereco());
		
		return "endereco/form";
	}
	
	@PostMapping(value="")
	public String salvar(Endereco endereco) {
		enderecoRepository.save(endereco);
		return "redirect:/endereco/";
	}
	
	@GetMapping(value="/{id}")
	public String buscar(@PathVariable Long id, Model model) {
		model.addAttribute("endereco", enderecoRepository.findById(id));
		model.addAttribute("cidades", cidadeRepository.findAll());
		return "endereco/form";
	}
	
	@DeleteMapping(value = "/{id}")
	public String remover(@PathVariable Long id) {
		enderecoRepository.deleteById(id);
		return "redirect:/endereco/";
	}

	@Valid
	@Override
	protected CrudService<Endereco, Long> getService() {
		return enderecoService;
	}
	
}
