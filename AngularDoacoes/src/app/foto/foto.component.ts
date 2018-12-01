import { FotoService } from './foto.service';
import { Component, OnInit, Input } from '@angular/core';
import { Campanha } from '../model/campanha';
import { Foto } from '../model/foto';

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
    this.fotos.forEach( (foto: any) => {
      this.images.push({source: 'this.foto.caminhoFoto'});
   });

  }
}
