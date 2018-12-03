	package br.edu.utfpr.pb.plataformaDoacao.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "campanha_doacao")
@NoArgsConstructor
@EqualsAndHashCode(of = { "id" })
@ToString
@Data
public class Campanha implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Id_Doacao")
	private Long id;

	@Column(name = "Titulo", length = 60, nullable = false)
	private String titulo;

	@Column(name = "tipo_anuncio", nullable = false)
	private Integer tipoAnuncio;

	@Column(name = "Descricao", length = 60, nullable = false)
	private String descricao;

	@Column(name = "Status", nullable = false)
	private boolean status;

	@Column(name = "datainicio", nullable = false)
	private LocalDate dataInicio;
	
 	@Column(name = "datafinal", nullable = false)
	private LocalDate dataFinal;
	
	@Column(name = "Telefone", length = 12, nullable = false)
	private String telefone;
	
	@Column(name = "Celular", length = 12, nullable = true)
	private String celular;

	@ManyToOne
	@JoinColumn(name = "Id_Pessoa", referencedColumnName = "Id_Pessoa")
	private Pessoa pessoa;
	
	@ManyToOne
	@JoinColumn(name = "id_Recebedor", referencedColumnName = "Id_Pessoa")
	private Pessoa recebedor;
	
	@ManyToOne
	@JoinColumn(name = "Id_Categoria", referencedColumnName = "Id_Categoria")
	private Categoria categoria;
	
	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Endereco> endereco; 
	
}
