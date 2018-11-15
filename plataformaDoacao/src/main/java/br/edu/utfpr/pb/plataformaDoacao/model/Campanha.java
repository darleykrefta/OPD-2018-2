package br.edu.utfpr.pb.plataformaDoacao.model;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "campanha_doacao")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = { "id" })
@ToString
public class Campanha implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Id_Doacao")
	private Long id;

	@Column(name = "Titulo", length = 60, nullable = false)
	private String titulo;

	@Column(name = "Tipo_anuncio", nullable = false)
	private Integer tipoAnuncio;

	@Column(name = "Descricao", length = 60, nullable = false)
	private String descricao;

	@Column(name = "Status", nullable = false)
	private boolean status;

	@Column(name = "Data_Inicio", nullable = false)
	private LocalDate data_Inicio;

	@Column(name = "Data_Final", nullable = false)
	private LocalDate data_Final;
	
	@Column(name = "Telefone", length = 12, nullable = false)
	private String telefone;
	
	@Column(name = "Celular", length = 12, nullable = true)
	private String celular;

	@Column(name = "Foto", length = 666, nullable = true)
	private String foto;

	@ManyToOne
	@JoinColumn(name = "Id_Pessoa", referencedColumnName = "Id_Pessoa")
	private Pessoa pessoa;
	
	@ManyToOne
	@JoinColumn(name = "id_Recebedor", referencedColumnName = "Id_Pessoa")
	private Pessoa recebedor;
	
	@ManyToOne
	@JoinColumn(name = "Id_Categoria", referencedColumnName = "Id_Categoria")
	private Categoria categoria;

}
