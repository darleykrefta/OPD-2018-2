import { Campanha } from '../interface/campanha';
import { Pessoa } from './pessoa';

export class Mensagem {
    id: Number;
    dataHora: Date;
    mensagem: String;
    pessoa: Pessoa;
    campanha: Campanha;
}
