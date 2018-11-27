import { Endereco } from "./endereco";

export class Pessoa {
    id: number;
    cpfCnpj: string;
    nome: string;
    email: string;
    senha: string;
    senha2: string;
    apelido: string;
    telefone: string;
    celular: string;
    foto: string;
    status: boolean;
    endereco: Endereco;
}
