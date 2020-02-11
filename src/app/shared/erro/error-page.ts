import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
  <div class="exception-body error-page">
    <div class="exception-type">
        <img src="assets/layout/images/error.svg">
    </div>

    <div class="card exception-panel">
        <i class="material-icons">&#xE000;</i>
        <h1>Ocorreu um problema!</h1>
        <div class="exception-detail">Por favor contate o administrador</div>
        <p-button label="Dashboard" [routerLink]="['/dashboard']" styleClass="pink-btn"></p-button>
    </div>
</div>
  `,
  styles: []
})
export class ErrorPageComponent {
    constructor(private router: Router) {
    }
}