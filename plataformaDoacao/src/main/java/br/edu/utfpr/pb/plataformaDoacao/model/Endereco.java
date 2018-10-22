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

import br.edu.utfpr.pb.plataformaDoacao.model.Cidade;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "Endereco")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = { "id" })
@ToString
public class Endereco implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@Column(name="Id_Endereco")
	private Long id;

	@Column(name = "Rua", length = 60, nullable = false)
	private String rua;

	@Column(name = "Numero", length = 10, nullable = false)
	private String numero;

	@Column(name = "Bairro", length = 60, nullable = false)
	private String bairro;

	@Column(name = "CEP", length = 8, nullable = false)
	private String cep;

	@Column(name = "Complemento", length = 60, nullable = true)
	private String complemento;

	@ManyToOne
	@JoinColumn(name = "Id_Cidade", referencedColumnName = "id", nullable = false)
	private Cidade cidade;
}
