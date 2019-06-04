import {Component, OnInit} from '@angular/core';
import {TipoLocalizacaoService} from './tipo-localizacao.service';
import {TipoLocalizacao} from '../core/model';

@Component({
  selector: 'app-tipo-localizacao',
  templateUrl: './tipo-localizacao.component.html',
  styleUrls: ['./tipo-localizacao.component.css']
})
export class TipoLocalizacaoComponent implements OnInit {

  listaEntidade: Array<TipoLocalizacao>;

  constructor(private tipoLocalizacaoService: TipoLocalizacaoService) { }

  ngOnInit() {
    this.consultarTodos();
  }

  consultarTodos() {
    this.tipoLocalizacaoService.consultarTodos().subscribe(
      retorno => this.listaEntidade = retorno
    );
  }
}
