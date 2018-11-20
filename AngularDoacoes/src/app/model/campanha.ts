import { Categoria } from './categoria';
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
    pessoa;
    recebedor;
    categoria: Categoria;
}
