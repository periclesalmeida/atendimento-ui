import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {AppHttp} from '../seguranca/app-http.service';
import {Usuario} from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private resourceUrl = environment.API_URL + '/usuario';

  constructor(private appHttp: AppHttp) { }

  consultarPorEntidade(entidade: Usuario, paginacao): any {
    return this.appHttp.post<any>(`${this.resourceUrl}/consulta`, entidade, {params: paginacao});
  }

  consultarPorId(sequencial): any {
    return this.appHttp.get<any>(`${this.resourceUrl}/${sequencial}`);
  }

  inserir(entidade: Usuario): any {
    return this.appHttp.post<any>(`${this.resourceUrl}`, entidade);
  }

  alterar(entidade: Usuario): any {
    return this.appHttp.put<any>(`${this.resourceUrl}/${entidade.sequencial}`, entidade);
  }
}
