package br.edu.utfpr.pb.plataformaDoacao.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import br.edu.utfpr.pb.plataformaDoacao.model.Cidade;
import br.edu.utfpr.pb.plataformaDoacao.repository.CidadeRepository;
import br.edu.utfpr.pb.plataformaDoacao.repository.EstadoRepository;



@Controller
@RequestMapping("/cidade")
public class CidadeController {

	@Autowired
	private CidadeRepository cidadeRepository;
	
	@Autowired
	private EstadoRepository estadoRepository;
	
	@GetMapping(value="/")
	public String listar(Model model) {
		model.addAttribute("cidades", cidadeRepository.findAll());
		return "cidade/list";
	}
	
	@GetMapping(value="/form")
	public String novo(Model model) {
		model.addAttribute("estados", estadoRepository.findAll());
		model.addAttribute("cidade", new Cidade());
		
		return "cidade/form";
	}
	
	@PostMapping(value="")
	public String salvar(Cidade cidade) {
		cidadeRepository.save(cidade);
		return "redirect:/cidade/";
	}
	
	@GetMapping(value="/{id}")
	public String buscar(@PathVariable Long id, Model model) {
		model.addAttribute("cidade", cidadeRepository.findById(id));
		model.addAttribute("estados", estadoRepository.findAll());
		return "cidade/form";
	}
	
	@DeleteMapping(value = "/{id}")
	public String remover(@PathVariable Long id) {
		cidadeRepository.deleteById(id);
		return "redirect:/cidade/";
	}
	
}
