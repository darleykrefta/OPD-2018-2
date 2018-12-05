import { AnuncioService } from './../anuncio/anuncio.service';

import { Campanha } from '../model/campanha';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Foto } from '../model/foto';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-visualizar-anuncio',
  templateUrl: './visualizar-anuncio.component.html',
  styleUrls: ['./visualizar-anuncio.component.css']
})
export class VisualizarAnuncioComponent implements OnInit {

  campanha: Campanha;
  idAtual: number;

  constructor(private route: ActivatedRoute,
    private anuncioService: AnuncioService) { }

  ngOnInit() {
    this.route.params.subscribe((objeto: any) => { this.idAtual = objeto['campanhaId']; });
    this.anuncioService.findOne(this.idAtual).subscribe(e => this.campanha = e);
  }

}
