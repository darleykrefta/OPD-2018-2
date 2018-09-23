package br.edu.utfpr.pb.plataformaDoacao.model;

import java.io.Serializable;

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
@Table(name="pessoa")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of= {"id"})
@ToString
public class Pessoa implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(length=14, nullable=false)
	private String cpf_cnpj;
	
	@Column(length=60, nullable=false)
	private String nome;

	@Column(length=60, nullable=false)
	private String email;

	@Column(length=60, nullable=false)
	private String senha;

	@Column(length=60, nullable=false)
	private String apelido;

	@Column(length=12, nullable=false)
	private String telefone;

	@Column(length=666, nullable=false)
	private String foto;

	@Column(length=60, nullable=false)
	private Boolean status;
	
	@ManyToOne
	@JoinColumn(name="id_endereco", referencedColumnName="id")
	private Endereco endereco;
	
	public Pessoa (String email, String senha) {
		this.email = email;
		this.senha = senha;
	}
	
}
