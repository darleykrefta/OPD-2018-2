import { Campanha } from '../model/campanha';
import { Pessoa } from './pessoa';

export class Mensagem {
    id: Number;
    mensagem: String;
    pessoa: Pessoa;
    campanha: Campanha;
}
