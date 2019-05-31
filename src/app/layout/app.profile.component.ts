// import {AppComponent} from './app.component';
import {Component} from '@angular/core';
import {trigger, state, transition, style, animate} from '@angular/animations';
// import { AuthService } from './seguranca/auth.service';
// import { LogoutService } from './seguranca/logout.service';
import { LayoutComponent } from './layout.component';
import { AuthService } from '../seguranca/auth.service';
import { LogoutService } from '../seguranca/logout.service';

@Component({
    selector: 'app-inline-profile',
    template: `
        <div class="profile" [ngClass]="{'profile-expanded':active}">
            <a href="#" (click)="onClick($event)">
                <img class="profile-image" src="assets/layout/images/avatar.png" style="border-radius: 50%;"/>
                <span class="profile-name">{{ auth.jwtPayload?.nome }}</span>
                <i class="material-icons">keyboard_arrow_down</i>
            </a>
        </div>

        <ul class="ultima-menu profile-menu" [@menu]="active ? 'visible' : 'hidden'">
            <li role="menuitem">
                <a href="#" (click)="logout()" class="ripplelink" [attr.tabindex]="!active ? '-1' : null">
                    <i class="material-icons">power_settings_new</i>
                    <span>Sair</span>
                </a>
            </li>
        </ul>
    `,
    animations: [
        trigger('menu', [
            state('hidden', style({
                height: '0px'
            })),
            state('visible', style({
                height: '*'
            })),
            transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppInlineProfileComponent {

    active: boolean;
    
    constructor(public app: LayoutComponent, public auth: AuthService, private logoutService: LogoutService) {}

    logout() {
        this.logoutService.logout();
    }

    onClick(event) {
        this.active = !this.active;
        setTimeout(() => {
          this.app.layoutMenuScrollerViewChild.moveBar();
        }, 450);
        event.preventDefault();
    }
}
