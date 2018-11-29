import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  isAuthenticated = false;

  constructor(private loginService: LoginService) {
    this.loginService.isAuthenticated.asObservable().subscribe(e => this.isAuthenticated = e);
  }

  ngOnInit() {
    this.items = [{
      items: [
        { label: 'Perfil', icon: 'pi pi-fw pi-user', routerLink: 'perfil' },
        { label: 'Meus Anúncios', icon: 'fa fa-bullhorn', routerLink: '/' },
        { label: 'Sair', icon: 'pi pi-fw pi-download', command: (onclick) => { this.loginService.loggout(); } }

      ]
    }];
  }

}
