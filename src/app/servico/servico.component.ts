import {Component, OnInit} from '@angular/core';
import {Servico} from '../core/model';
import {ServicoService} from './servico.service';
import {LazyLoadEvent} from 'primeng/api';
import {ITEMS_PER_PAGE} from '../shared/constant/pagination.constants';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  listaEntidade: Array<Servico>;
  entidade: Servico;

  page: any;
  size: any;
  totalElements: any;

  constructor(private servicoService: ServicoService) { }

  ngOnInit() {
    this.entidade  = new Servico();
    this.page =  0;
    this.size = ITEMS_PER_PAGE;
    this.consultar();
  }

  consultar() {
    this.servicoService.consultarPorEntidade(this.entidade, this.obterPaginacao()).subscribe (
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
