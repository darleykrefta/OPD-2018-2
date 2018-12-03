import { Component, OnInit } from '@angular/core';
import { Message, ConfirmationService } from 'primeng/api';
import { EsqueciSenhaService } from './esqueci-senha.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css']
})
export class EsqueciSenhaComponent implements OnInit {

  email: string;
  msgs: Message[] = [];

  constructor(private esqueciSenhaService: EsqueciSenhaService,
    private router: Router) { }

  ngOnInit() {
  }

  esqueciSenha() {
    this.esqueciSenhaService.findByEmail(this.email).subscribe (e =>  {
      this.router.navigate(['/']);
    }, error => {
      // alert(error.error.error_description);
      this.msgs = [{severity: 'error', summary: 'Erro',
      detail: 'Usuário e/ou senha incorreto(s)!'}];
    });
  }



}
