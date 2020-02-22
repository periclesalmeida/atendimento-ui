import {Component} from '@angular/core';
import {AuthService} from '../seguranca/auth.service';
import {LogoutService} from '../seguranca/logout.service';
import {LayoutComponent} from './layout.component';

@Component({
    selector: 'app-topbar',
    template: `
      <div class="topbar clearfix">
        <div class="topbar-left">
          <div class="logo"></div>
        </div>

        <div class="topbar-right">
          <a id="menu-button" href="#" (click)="app.onMenuButtonClick($event)">
            <i></i>
          </a>

        </div>
      </div>
    `
})
export class AppTopbarComponent {
    constructor(public app: LayoutComponent, private auth: AuthService, private logoutService: LogoutService) {}
    logout() {
        this.logoutService.logout();
    }
}
