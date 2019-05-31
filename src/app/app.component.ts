import {Component, AfterViewInit, ElementRef, Renderer2, ViewChild, OnDestroy, OnInit, NgZone} from '@angular/core';
import { ScrollPanel} from 'primeng/primeng';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor() { }
  
    ngOnInit() {
    }

}
