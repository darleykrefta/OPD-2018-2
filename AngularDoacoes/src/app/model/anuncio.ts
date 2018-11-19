import { Categoria } from './categoria';
import { Pessoa } from './pessoa';
import { Endereco } from './endereco';

export class Anuncio {
    id: number;
    titulo: string;
    tipoAnuncio: number;
    descricao: string;
    status: number;
    data_Inicio: Date;
    data_Final: Date;
    telefone: string;
    celular: string;
    foto: string;
    pessoa: Pessoa;
    recebedor: Pessoa;
    categoria: Categoria;
    endereco: Endereco[];
}
