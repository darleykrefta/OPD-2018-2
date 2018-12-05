package br.edu.utfpr.pb.plataformaDoacao.model;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;

@Entity
public class ResetarSenhaToken {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false, unique = true)
    private String token;

    @OneToOne(targetEntity = Pessoa.class, fetch = FetchType.LAZY)
    @JoinColumn(nullable = false, name = "pessoa_id")
    private Pessoa pessoa;

    @Column(nullable = false)
    private Date dataExpiracao;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Pessoa getPessoa() {
        return pessoa;
    }

    public void setUser(Pessoa pessoa) {
        this.pessoa = pessoa;
    }

    public Date getDataExpiracao() {
        return dataExpiracao;
    }

    public void setDataExpiracao(Date dataExpiracao) {
        this.dataExpiracao = dataExpiracao;
    }

    public void setDataExpiracao(int minutos){
        Calendar agora = Calendar.getInstance();
        agora.add(Calendar.MINUTE, minutos);
        this.dataExpiracao = agora.getTime();
    }

    public boolean isExpired() {
        return new Date().after(this.dataExpiracao);
    }
}