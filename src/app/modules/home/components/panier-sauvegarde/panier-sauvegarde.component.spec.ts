import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierSauvegardeComponent } from './panier-sauvegarde.component';

describe('PanierSauvegardeComponent', () => {
  let component: PanierSauvegardeComponent;
  let fixture: ComponentFixture<PanierSauvegardeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierSauvegardeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierSauvegardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
