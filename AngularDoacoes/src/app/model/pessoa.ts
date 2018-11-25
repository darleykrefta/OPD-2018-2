import { Endereco } from './endereco';

export class Pessoa {
    id: number;
    cpf_cnpj: string;
    nome: string;
    email: string;
    senha: string;
    senha2: string;
    apelido: string;
    telefone: string;
    celular: string;
    foto: string;
    status: boolean;
    termos: boolean;
    endereco: Endereco;
}
