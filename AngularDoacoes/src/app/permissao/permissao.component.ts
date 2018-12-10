import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permissao',
  templateUrl: './permissao.component.html',
  styleUrls: ['./permissao.component.css']
})
export class PermissaoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['/index']);
  }

  cadastroUsuario() {
    this.router.navigate(['/cadastroUsuario']);
  }

  login() {
    this.router.navigate(['/login']);
  }

}
