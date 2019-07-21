import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {AppHttp} from '../seguranca/app-http.service';

@Injectable({
  providedIn: 'root'
})
export class PermissaoService {

  private resourceUrl = environment.API_URL + '/permissao';

  constructor(private appHttp: AppHttp) { }

  consultarTodos(): any {
    return this.appHttp.get<any>(this.resourceUrl);
  }

}
