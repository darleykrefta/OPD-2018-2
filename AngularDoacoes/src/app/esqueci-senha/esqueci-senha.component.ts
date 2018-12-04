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
      this.router.navigate(['/login']);
      this.msgs = [{
          severity: 'success',
          summary: 'Confirmado',
          detail: 'Instruções de reset de senha enviadas no e-mail informado!'
        }];
    }, error => {
      // alert(error.error.error_description);
      this.msgs = [{severity: 'error', summary: 'Erro',
      detail: 'E-mail não existe!'}];
    });
  }



}
