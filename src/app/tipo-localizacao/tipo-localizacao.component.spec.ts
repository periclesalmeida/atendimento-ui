import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoLocalizacaoComponent } from './tipo-localizacao.component';

describe('TipoLocalizacaoComponent', () => {
  let component: TipoLocalizacaoComponent;
  let fixture: ComponentFixture<TipoLocalizacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoLocalizacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoLocalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
