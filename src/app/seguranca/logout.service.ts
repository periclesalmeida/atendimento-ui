import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { AppHttp } from './app-http.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  tokensRenokeUrl: string;

  constructor(
    private http: AppHttp,
    private auth: AuthService,
    private router: Router
  ) {
    this.tokensRenokeUrl = `${environment.API_URL}/token/revoke`;
  }

  logout() {
    return this.http.delete(this.tokensRenokeUrl, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.auth.limparAccessToken();
        this.router.navigate(['/login']);
      });
  }
}
