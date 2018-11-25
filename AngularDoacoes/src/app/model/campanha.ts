import { Categoria } from './categoria';
import { Pessoa } from './pessoa';
import { Endereco } from './endereco';

export class Campanha {
    id: number;
    titulo: string;
    tipoAnuncio: number;
    descricao: string;
    status: number;
    dataInicio: Date;
    dataFinal: Date;
    telefone: string;
    celular: string;
    foto: string;
    pessoa: Pessoa;
    recebedor: Pessoa;
    categoria: Categoria;
    endereco: Endereco[];
}
