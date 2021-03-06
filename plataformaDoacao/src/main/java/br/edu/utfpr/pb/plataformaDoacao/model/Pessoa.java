package br.edu.utfpr.pb.plataformaDoacao.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "pessoa_institucao")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = { "id" })
@ToString
public class Pessoa implements Serializable, UserDetails {

	private static final long serialVersionUID = 1L;
	private static final BCryptPasswordEncoder bCrypt = new BCryptPasswordEncoder(10);

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Id_Pessoa")
	private Long id;

	@Column(name = "CpfCnpj", length = 14, nullable = false)
	private String cpfCnpj;

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

	@Column(name = "Celular", length = 12, nullable = false)
	private String celular;

	@Column()
	private String foto;

	@Column(name = "Status", length = 60, nullable = true)
	private Boolean status;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "Id_Endereco", referencedColumnName = "Id_Endereco")
	private Endereco endereco;

	@ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
	@JsonIgnore
	private Set<Permissao> permissoes;

	public Pessoa(String email, String senha) {
		this.email = email;
		this.senha = senha;
	}
	
	@Override
	@JsonIgnore
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<GrantedAuthority> auto = new ArrayList<>();
		auto.addAll(getPermissoes());
		
		return auto;
	}
	
	public void addPermissao(Permissao permissao) {
		if (permissoes == null) {
			permissoes = new HashSet<>();
		}
		permissoes.add(permissao);
	}
	
	public String getEncodedPassword(String pass) {
		if (pass != null && ! pass.equals("")) {
			if (bCrypt.matches(pass, getSenha()) == true) {
				return pass;
			}
			return bCrypt.encode(pass);
		}
		return pass;
	}
	
	@Override
	public String getPassword() {
		return this.senha;
	}

	@Override
	public String getUsername() {
		return this.email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
