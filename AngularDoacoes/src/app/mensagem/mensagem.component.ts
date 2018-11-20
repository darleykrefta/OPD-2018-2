import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { Mensagem } from '../interface/mensagem';
import { MensagemService } from './mensagem.service';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

    @Input() campanhaId: number;
    mensagens: Mensagem[];

    constructor(private mensagemService: MensagemService) {}

    ngOnInit() {
      this.mensagemService.getComments(this.campanhaId).subscribe(e => this.mensagens = e);
    }

    //save(){
      //const texto = this.commentForm.get('texto').values;
      //this.mensagemService.addMensagem(this.campanhaId, texto);
    //}

  }



