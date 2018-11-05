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


	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Id_Cidade")
	private Long id;

	@Column(length=50, nullable=false)
	private String nome;

	@Column(length=2, nullable=false)
	private String sigla;

}
