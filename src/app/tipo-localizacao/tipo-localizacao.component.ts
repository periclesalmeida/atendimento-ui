import { Component, OnInit } from '@angular/core';
import {TipoLocalizacaoService} from './tipo-localizacao.service';

@Component({
  selector: 'app-tipo-localizacao',
  templateUrl: './tipo-localizacao.component.html',
  styleUrls: ['./tipo-localizacao.component.css']
})
export class TipoLocalizacaoComponent implements OnInit {

  listaEntidade: Array<any>;
  entidade: any;

  constructor(private tipoLocalizacaoService: TipoLocalizacaoService) { }

  ngOnInit() {
    this.tipoLocalizacaoService.consultarTodos().subscribe(
      retorno => this.listaEntidade = retorno
    );
  }
}
