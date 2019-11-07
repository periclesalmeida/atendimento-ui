import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorTelaComponent } from './monitor-tela.component';

describe('MonitorTelaComponent', () => {
  let component: MonitorTelaComponent;
  let fixture: ComponentFixture<MonitorTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorTelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
