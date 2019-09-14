import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {AppHttp} from '../seguranca/app-http.service';
import {TipoLocalizacao} from '../core/model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoLocalizacaoService {

  private resourceUrl = environment.API_URL + '/tipo-localizacao';

  constructor(private appHttp: AppHttp) { }

  consultarTodos(): any {
    return this.appHttp.get<any>(this.resourceUrl);
  }

  consultarPorEntidade(entidade: TipoLocalizacao, paginacao): any {
    return this.appHttp.get<any>(`${this.resourceUrl}/consulta`, {params: Object.assign(entidade, paginacao)});
  }

  consultarPorId(id): any {
    return this.appHttp.get<any>(`${this.resourceUrl}/${id}`);
  }

  inserir(entidade: TipoLocalizacao): any {
    return this.appHttp.post<any>(`${this.resourceUrl}`, entidade);
  }

  alterar(entidade: TipoLocalizacao): any {
    return this.appHttp.put<any>(`${this.resourceUrl}/${entidade.id}`, entidade);
  }
}
