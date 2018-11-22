import { Categoria } from './categoria';
import { Pessoa } from './pessoa';
export class Campanha {
    id: number;
    titulo;
    tipoAnuncio;
    descricao;
    status;
    data_Inicio;
    data_Final;
    telefone;
    celular;
    foto;
    pessoa: Pessoa;
    recebedor;
    categoria: Categoria;
}
