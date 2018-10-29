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
@Table(name = "Endereco_Campanha")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = { "id" })
@ToString
public class EnderecoCampanha implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Id_CampanhaEndereco")
	private Long id;

	@ManyToOne
	@JoinColumn(name = "Id_Doacao", referencedColumnName = "Id_Doacao")
	private Campanha campanha;

	@ManyToOne
	@JoinColumn(name = "Id_Endereco", referencedColumnName = "Id_Endereco")
	private Endereco endereco;

}
