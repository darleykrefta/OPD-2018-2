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
@Table(name = "Pessoa_Institucao")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = { "id" })
@ToString
public class Pessoa implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Id_Pessoa")
	private Long id;

	@Column(name = "CPF_CNPJ", length = 14, nullable = false)
	private String cpf_cnpj;

	@Column(name = "Nome", length = 60, nullable = false)
	private String nome;

	@Column(name = "Email", length = 60, nullable = false)
	private String email;

	@Column(name = "Senha", length = 60, nullable = false)
	private String senha;

	@Column(name = "Apelido", length = 60, nullable = false)
	private String apelido;

	@Column(name = "Telefone", length = 12, nullable = false)
	private String telefone;

	@Column(name = "Celular", length = 12, nullable = true)
	private String celular;

	@Column(name = "Foto", length = 666, nullable = true)
	private String foto;

	@Column(name = "Status", length = 60, nullable = false)
	private Boolean status;

	@ManyToOne
	@JoinColumn(name = "Id_Endereco", referencedColumnName = "Id_Endereco")
	private Endereco endereco;

	public Pessoa(String email, String senha) {
		this.email = email;
		this.senha = senha;
	}

}
