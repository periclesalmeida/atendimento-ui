import {Component, OnInit} from '@angular/core';
import {Localizacao} from '../core/model';
import {ITEMS_PER_PAGE} from '../shared/constant/pagination.constants';
import {LazyLoadEvent} from 'primeng/api';
import {LocalizacaoService} from './localizacao.service';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.css']
})
export class LocalizacaoComponent implements OnInit {

  listaEntidade: Array<Localizacao>;
  entidade: Localizacao;

  page: any;
  size: any;
  totalElements: any;

  constructor(private localizacaoService: LocalizacaoService) { }

  ngOnInit() {
    this.entidade  = new Localizacao();
    this.page =  0;
    this.size = ITEMS_PER_PAGE;
    this.consultar();
  }

  consultar() {
    this.localizacaoService.consultarPorEntidade(this.entidade, this.obterPaginacao()).subscribe (
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
