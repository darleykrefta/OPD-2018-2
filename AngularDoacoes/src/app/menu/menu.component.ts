import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [{
     items: [
          {label: 'Perfil', icon: 'pi pi-fw pi-user', routerLink: 'perfil'},
          {label: 'Meus Anúncios', icon: 'fa fa-bullhorn', routerLink: ['campanha']},
          {label: 'Sugestões', icon: 'pi pi-fw pi-download'},
          {label: 'Sair', icon: 'pi pi-fw pi-download'}
      ]
  }];
  }

}
