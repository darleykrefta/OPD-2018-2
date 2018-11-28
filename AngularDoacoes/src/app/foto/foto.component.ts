import { FotoService } from './foto.service';
import { Component, OnInit, Input } from '@angular/core';
import { Foto } from '../model/foto';
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
  imagesSrc: any;

  constructor(private fotoService: FotoService ) { }

  ngOnInit() {
    this.fotoService.getFotos(this.campanhaId).subscribe(e => this.fotos = e);

    this.images = [];
    for (let i = 1; i <= this.campanhaId; i++) {
       this.images.push({'src': this.foto.caminhoFoto[i]});
    }
  }

}
