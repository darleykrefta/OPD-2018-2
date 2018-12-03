import { Foto } from './../model/foto';
import { FotoService } from './foto.service';
import { Component, OnInit, Input } from '@angular/core';
import { Campanha } from '../model/campanha';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  @Input() campanhaId: number;
  fotos: Foto[];
  foto = new Foto();
  campanha = new Campanha();
  images: any[];

  constructor(private fotoService: FotoService ) { }

  ngOnInit() {
    this.fotoService.getFotos(this.campanhaId).subscribe(e => this.fotos = e);

    this.images = [];
    this.fotos.forEach( function(foto) {
        this.images.push({source: this.foto.caminhoFoto});
    });
  }

}
