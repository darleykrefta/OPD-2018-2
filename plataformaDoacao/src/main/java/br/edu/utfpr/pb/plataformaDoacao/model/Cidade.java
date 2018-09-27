package br.edu.utfpr.pb.plataformaDoacao.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Entity
@Table(name="cidade")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of= {"id"})
@ToString
public class Cidade implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable=false)
	private String nome;

	@Column(nullable=false)
	private String sigla;
	
}
