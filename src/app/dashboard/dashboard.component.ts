import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboard: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.carregar();
  }

  private carregar() {
    this.dashboardService.carregar().subscribe (
      retorno => {
        this.dashboard = retorno;
      }
    );
  }
}
