package br.edu.utfpr.pb.plataformaDoacao.controller;

import org.springframework.beans.factory.annotation.Autowired;
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
	
}
