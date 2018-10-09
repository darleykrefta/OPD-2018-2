import { Component, OnInit } from '@angular/core';
import { GeneroService } from './genero.service';
import { Genero } from '../model/genero';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {

  generos: Genero[];

  constructor(private generoService: GeneroService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.generoService.findAll().subscribe(
                    e => this.generos = e);
  }

}
