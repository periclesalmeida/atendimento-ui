import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppHttp } from '../seguranca/app-http.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private resourceUrl = environment.API_URL + '/dashboard';

  constructor(private appHttp: AppHttp) { }

  carregar(): any {
    return this.appHttp.get<any>(`${this.resourceUrl}`);
  }
}
