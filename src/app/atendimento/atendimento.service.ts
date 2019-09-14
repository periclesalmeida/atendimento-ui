import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {AppHttp} from '../seguranca/app-http.service';
import {Atendimento} from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  private resourceUrl = environment.API_URL + '/atendimento';

  constructor(private appHttp: AppHttp) { }

  consultarPorId(sequencial): any {
    return this.appHttp.get<any>(`${this.resourceUrl}/${sequencial}`);
  }

  inserir(entidade: Atendimento): any {
    return this.appHttp.post<any>(`${this.resourceUrl}`, entidade);
  }
}
