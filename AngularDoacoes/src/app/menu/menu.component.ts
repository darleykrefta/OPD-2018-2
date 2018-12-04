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
  }

  ngOnInit() {
    this.isAuthenticated = this.loginService.getAuthenticated();
    if (this.isAuthenticated) {
      this.items = [{
        items: [
          { label: 'Perfil', icon: 'pi pi-fw pi-user', routerLink: 'perfil' },
          { label: 'Sair', icon: 'pi pi-fw pi-download', command: (onclick) => { this.loginService.loggout(); } }
        ]
      }];
    } else {
      this.items = [{
        items: [
          { label: 'Fazer Login', icon: 'pi pi-fw pi-user', routerLink: 'login' }
        ]
      }];
    }
  }

}
