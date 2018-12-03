package br.edu.utfpr.pb.plataformaDoacao.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.plataformaDoacao.model.Foto;
import br.edu.utfpr.pb.plataformaDoacao.service.CrudService;
import br.edu.utfpr.pb.plataformaDoacao.service.FotoService;

@RestController
@RequestMapping("foto")
public class FotoController  extends CrudController<Foto, Long> {

	@Autowired
	private FotoService fotoService;

	@Override
	protected CrudService<Foto, Long> getService() {
		return fotoService;
	}
	
	@GetMapping("visualizaranuncio/{campanhaId}")
	public List<Foto> listaFotos(@PathVariable Long campanhaId) {
		return fotoService.findByCampanhaId(campanhaId);
	}
	
}
