package br.edu.utfpr.pb.plataformaDoacao.controller;

import java.security.Principal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.plataformaDoacao.model.Campanha;
import br.edu.utfpr.pb.plataformaDoacao.service.CampanhaService;
import br.edu.utfpr.pb.plataformaDoacao.service.CrudService;

@RestController
@RequestMapping("campanha")
public class CampanhaController  extends CrudController<Campanha, Long> {

	@Autowired
	private CampanhaService campanhaService;

	@Override
	protected CrudService<Campanha, Long> getService() {
		return campanhaService;
	}
	

	@GetMapping("filter/meusanuncios")
	public List<Campanha> findByPessoaId(@RequestParam Long id, Principal principal){
		return campanhaService.findByPessoaId(id);
	}
	
	@GetMapping
	public List<Campanha> findAll(){
		return campanhaService.findAll();
	}


	
	@SuppressWarnings("unused")
	@GetMapping("search")
	public List<Campanha> findByDataInicioBetweenOrCategoriaId (
			@RequestParam(required = false) String dataIni,
			@RequestParam(required = false) String dataFim,
			@RequestParam(required = false) String categoria){
		
			if (dataIni != null && dataFim != null && categoria != null 
						&& dataIni != "" && dataFim != "" && categoria != ""){
			   return campanhaService.findByDataInicioBetweenOrCategoriaId(LocalDate.parse(dataIni, 
			          DateTimeFormatter.ofPattern("dd/MM/yyyy")), LocalDate.parse(dataFim,
			        		  DateTimeFormatter.ofPattern("dd/MM/yyyy")), Long.valueOf(categoria));
		    } else if (dataIni != null && dataFim != null && dataIni != "" && dataFim != "" && 
		    				categoria == "" && categoria == null ) {
				return campanhaService.findByDataInicioBetween(LocalDate.parse(dataIni, 
						DateTimeFormatter.ofPattern("dd/MM/yyyy")), LocalDate.parse(dataFim, 
									DateTimeFormatter.ofPattern("dd/MM/yyyy")));
			} else if (categoria != null && categoria != "" && dataIni == "" && dataFim == "" 
					         && dataIni != null && dataFim != null ) {
		    	return campanhaService.findByCategoriaId(Long.parseLong(categoria));
		    }
			
			return null;
	}
	
}
