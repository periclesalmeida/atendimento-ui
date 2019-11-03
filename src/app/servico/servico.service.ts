import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {AppHttp} from '../seguranca/app-http.service';
import {Servico} from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private resourceUrl = environment.API_URL + '/servico';

  constructor(private appHttp: AppHttp) { }

  consultarTodos(paginacao?): any {
    return this.appHttp.get<any>(`${this.resourceUrl}`, {params: paginacao});
  }

  consultarPorEntidade(entidade: Servico, paginacao): any {
    return this.appHttp.get<any>(`${this.resourceUrl}`, {params: Object.assign(entidade, paginacao)});
  }

  consultarPorId(codigo): any {
    return this.appHttp.get<Servico>(`${this.resourceUrl}/${codigo}`);
  }

  inserir(entidade: Servico): any {
    return this.appHttp.post<any>(`${this.resourceUrl}`, entidade);
  }

  alterar(entidade: Servico): any {
    return this.appHttp.put<any>(`${this.resourceUrl}/${entidade.id}`, entidade);
  }

  consultarTodasAsCores(): any {
    return this.appHttp.get<any>(`${this.resourceUrl}/tipo-cor`);
  }
}
