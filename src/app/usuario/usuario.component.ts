import {Component, OnInit} from '@angular/core';
import {Usuario} from '../shared/model';
import {ITEMS_PER_PAGE} from '../shared/constant/pagination.constants';
import {LazyLoadEvent} from 'primeng/api';
import {UsuarioService} from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  listaEntidade: Array<Usuario>;
  entidade: Usuario;

  page: any;
  size: any;
  totalElements: any;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.entidade  = new Usuario();
    this.page =  0;
    this.size = ITEMS_PER_PAGE;
    this.consultar();
  }

  consultar() {
    this.usuarioService.consultarPorEntidade(this.entidade, this.obterPaginacao()).subscribe (
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
      sort: 'login'
    };
  }

}
