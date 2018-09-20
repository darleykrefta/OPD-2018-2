package br.edu.utfpr.pb.plataformaDoacao.model;

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
@Table(name = "endereco")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@ToString
public class Endereco {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(length=60, nullable=false)
	private String rua;
	
	@Column(length=10, nullable=false)
	private String numero;

	@Column(length=60, nullable=false)
	private String bairro;
	
	@Column(length=8, nullable=false)
	private String cep;

	@Column(length=60, nullable=true)
	private String complemento;
	
	@ManyToOne
	@JoinColumn(name="cidade_id", referencedColumnName="id" ,nullable=false)
	private Cidade cidade;
}
