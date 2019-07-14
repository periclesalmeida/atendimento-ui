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

  consultarTodos(): any {
    return this.appHttp.get<any>(this.resourceUrl);
  }

  consultarPorEntidade(entidade: Servico, paginacao): any {
    return this.appHttp.post<any>(`${this.resourceUrl}/consulta`, entidade, {params: paginacao});
  }

  consultarPorId(codigo): any {
    return this.appHttp.get<any>(`${this.resourceUrl}/${codigo}`);
  }

  inserir(entidade: Servico): any {
    return this.appHttp.post<any>(`${this.resourceUrl}`, entidade);
  }

  alterar(entidade: Servico): any {
    return this.appHttp.put<any>(`${this.resourceUrl}/${entidade.sequencial}`, entidade);
  }

  consultarTodasAsCores(): any {
    return this.appHttp.get<any>(`${this.resourceUrl}/tipo-cor`);
  }
}
