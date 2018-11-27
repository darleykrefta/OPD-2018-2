package br.edu.utfpr.pb.plataformaDoacao.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.utfpr.pb.plataformaDoacao.model.Foto;

public interface FotoRepository extends JpaRepository<Foto, Long> {

	public List<Foto> findByCampanhaId(Long id);
}
