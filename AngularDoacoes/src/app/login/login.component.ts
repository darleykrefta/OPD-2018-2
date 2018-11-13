import { Message } from 'primeng/api';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  msgs: Message[] = [];

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginService.isAuthenticated.next(false);
  }

  login() {
    this.loginService.loggin(this.username, this.password).subscribe(e => {
      this.router.navigate(['/']);
    }, error => {
      // alert(error.error.error_description);
      this.msgs = [{severity: 'error', summary: 'Erro',
      detail: 'Usuário e/ou senha incorreto(s)!'}];
    });
  }

}
