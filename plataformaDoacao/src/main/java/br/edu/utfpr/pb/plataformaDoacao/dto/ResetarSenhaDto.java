package br.edu.utfpr.pb.plataformaDoacao.dto;

import org.hibernate.validator.constraints.NotEmpty;

@SuppressWarnings("deprecation")
public class ResetarSenhaDto {

    @NotEmpty
    private String senha;

    @NotEmpty
    private String confirmSenha;

    @NotEmpty
    private String token;

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getConfirmSenha() {
        return confirmSenha;
    }

    public void setConfirmSenha(String confirmSenha) {
        this.confirmSenha = confirmSenha;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}