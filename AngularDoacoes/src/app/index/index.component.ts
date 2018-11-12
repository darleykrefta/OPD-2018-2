import { Component, OnInit, ViewChild } from '@angular/core';
import { DataView } from 'primeng/dataview';
import { CampanhaService } from '../campanha/campanha.service';
import { Campanha } from '../interface/Campanha';
import { LazyLoadEvent, Message, ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  @ViewChild('dv') DataView: DataView;

  campanhas: Campanha[];
  totalRecords: number;
  showDialog = false;
  msgs: Message[] = [];

  constructor(private campanhaService: CampanhaService) { }

  ngOnInit() {
    this.findAll();
  }

  findAllPaged(page: number, size: number) {
    this.campanhaService.count().subscribe(e =>
      this.totalRecords = e);
    this.campanhaService.findPageable(page, size)
      .subscribe(e => this.campanhas = e.content);
  }

  load(event: LazyLoadEvent) {
    const currentPage = event.first / event.rows;
    const maxRecords = event.rows;
    setTimeout(() => {
      this.findAllPaged(currentPage, maxRecords);
    }, 250);
  }

  findAll() {
    this.campanhaService.findAll().subscribe(
      e => this.campanhas = e);
  }

}
