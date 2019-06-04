import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {AppHttp} from '../seguranca/app-http.service';

@Injectable({
  providedIn: 'root'
})
export class TipoLocalizacaoService {

  private resourceUrl = environment.API_URL + '/tipo-localizacao';

  constructor(private appHttp: AppHttp) { }

  consultarTodos(): any {
    return this.appHttp.get<any>(this.resourceUrl);
  }

  consultarPorId(codigo): any {
    return this.appHttp.get<any>(`${this.resourceUrl}/${codigo}`);
  }

  inserir(entidade): any {
    return this.appHttp.post<any>(`${this.resourceUrl}`, entidade);
  }

  alterar(entidade): any {
    return this.appHttp.put<any>(`${this.resourceUrl}/${entidade.codigo}`, entidade);
  }
}
