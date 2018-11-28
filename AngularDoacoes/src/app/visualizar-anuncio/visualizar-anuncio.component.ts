import { Mensagem } from './../model/mensagem';
import { Campanha } from '../model/campanha';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CampanhaService } from '../campanha/campanha.service';
import { MensagemService } from '../mensagem/mensagem.service';


@Component({
  selector: 'app-visualizar-anuncio',
  templateUrl: './visualizar-anuncio.component.html',
  styleUrls: ['./visualizar-anuncio.component.css']
})
export class VisualizarAnuncioComponent implements OnInit {

  campanha: Campanha;

  idAtual: number;
  mensagens: Mensagem[];
  mensagem: Mensagem;
  constructor(private route: ActivatedRoute,
    private campanhaService: CampanhaService,
    private mensagemService: MensagemService) { }

  ngOnInit() {
    this.route.params.subscribe((objeto: any) => { this.idAtual = objeto['campanhaId']; });
    this.campanhaService.findOne(this.idAtual).subscribe(e => this.campanha = e);
  }

}
