import {Component, OnInit} from '@angular/core';
import {TipoLocalizacaoService} from './tipo-localizacao.service';
import {TipoLocalizacao} from '../shared/model';
import {ITEMS_PER_PAGE} from '../shared/constant/pagination.constants';
import {LazyLoadEvent} from 'primeng/api';

@Component({
  selector: 'app-tipo-localizacao',
  templateUrl: './tipo-localizacao.component.html',
  styleUrls: ['./tipo-localizacao.component.css']
})
export class TipoLocalizacaoComponent implements OnInit {

  listaEntidade: Array<TipoLocalizacao>;
  entidade: TipoLocalizacao;
  page: any;
  size: any;
  totalElements: any;

  constructor(private tipoLocalizacaoService: TipoLocalizacaoService) { }

  ngOnInit() {
    this.entidade  = new TipoLocalizacao();
    this.page =  0;
    this.size = ITEMS_PER_PAGE;
    this.consultar();
  }

  consultar() {
    this.tipoLocalizacaoService.consultarPorEntidade(this.entidade, this.obterPaginacao()).subscribe (
      retorno => {
        this.listaEntidade = retorno.content;
        this.totalElements = retorno.totalElements;
      }
    );
  }

  loadLazy(event: LazyLoadEvent) {
    this.page = event.first / event.rows;
    this.consultar();
  }

  private obterPaginacao() : any {
    return {
      page: this.page,
      size: this.size,
      sort: 'descricao'
    };
  }
}
