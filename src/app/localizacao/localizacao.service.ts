import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {AppHttp} from '../seguranca/app-http.service';
import {Localizacao} from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class LocalizacaoService {

  private resourceUrl = environment.API_URL + '/localizacao';

  constructor(private appHttp: AppHttp) { }

  consultarTodos(): any {
    return this.appHttp.get<any>(this.resourceUrl);
  }

  consultarPorEntidade(entidade: Localizacao, paginacao): any {
    return this.appHttp.get<any>(`${this.resourceUrl}/consulta`, {params: Object.assign(entidade, paginacao)});
  }

  consultarPorId(codigo): any {
    return this.appHttp.get<any>(`${this.resourceUrl}/${codigo}`);
  }

  inserir(entidade: Localizacao): any {
    return this.appHttp.post<any>(`${this.resourceUrl}`, entidade);
  }

  alterar(entidade: Localizacao): any {
    return this.appHttp.put<any>(`${this.resourceUrl}/${entidade.id}`, entidade);
  }
}
