import { AnuncioService } from './../anuncio/anuncio.service';
import { environment } from './../../environments/environment';
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
  images: any[];

  constructor(private fotoService: FotoService) { }

  ngOnInit() {
    this.images = [];
   // this.images.push({source: environment.api + '/images/1.5497754379438478.jpg'});
    //this.images.push({source: environment.api + '/images/1.1218757325933715.jpg'});
    this.fotoService.getFotos(this.campanhaId).subscribe(f => {
      f.forEach( foto => {
        this.images.push({source: environment.api + '/' + foto.caminhoFoto});
      });
    });
  }

}
