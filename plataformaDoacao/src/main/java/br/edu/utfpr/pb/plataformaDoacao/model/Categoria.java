package br.edu.utfpr.pb.plataformaDoacao.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "Categoria")
@Data
@NoArgsConstructor
@EqualsAndHashCode(of = { "id" })
@ToString
public class Categoria implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Id_Categoria")
	private Long id;

	@Column(name="Nome", length = 60, nullable = false)
	private String nome;
}
