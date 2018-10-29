package br.edu.utfpr.pb.plataformaDoacao.model;

import java.io.Serializable;
import java.time.LocalDateTime;

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
@Table(name = "Mensagem")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = { "id" })
@ToString
public class Mensagem implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Id_Mensagem")
	private Long id;

	@ManyToOne
	@JoinColumn(name = "Id_Doacao", referencedColumnName = "Id_Doacao")
	private Campanha campanha;

	@ManyToOne
	@JoinColumn(name = "Id_Pessoa", referencedColumnName = "Id_Pessoa")
	private Pessoa pessoa;
	
	@Column(name = "Mensagem", length=666, nullable = false)
	private String mensagem;
	
	@Column(name = "DataHora", nullable = false)
	private LocalDateTime dataHora;
	
	@Column(name = "Anonimo", nullable = false)
	private Integer anonimo;

}
