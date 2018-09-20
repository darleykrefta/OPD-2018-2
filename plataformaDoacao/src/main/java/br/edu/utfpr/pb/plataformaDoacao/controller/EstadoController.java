package br.edu.utfpr.pb.plataformaDoacao.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import br.edu.utfpr.pb.plataformaDoacao.model.Estado;
import br.edu.utfpr.pb.plataformaDoacao.repository.EstadoRepository;

@Controller
@RequestMapping("/estado")
public class EstadoController {
	
	@Autowired 
	private EstadoRepository estadoRepository;
	
	@GetMapping(value="/")
	public String listar(Model model) {
		model.addAttribute("estados", estadoRepository.findAll());
		return "estado/list";
	}
	
	@GetMapping(value="/form")
	public String novo() {
		return "estado/form";
	}
	
	@PostMapping(value="")
	public String salvar(Estado estado) {
		estadoRepository.save(estado);
		return "redirect:/estado/";
	}
	
	@GetMapping(value="/{id}")
	public String buscar(@PathVariable Long id, Model model) {
		model.addAttribute("estado", estadoRepository.findById(id));
		return "estado/form";
	}
	
	@DeleteMapping(value = "/{id}")
	public String remover(@PathVariable Long id) {
		estadoRepository.deleteById(id);
		return "redirect:/estado/";
	}
	
}
