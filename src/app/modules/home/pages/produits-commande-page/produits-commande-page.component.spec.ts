import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsCommandePageComponent } from './produits-commande-page.component';

describe('ProduitsCommandePageComponent', () => {
  let component: ProduitsCommandePageComponent;
  let fixture: ComponentFixture<ProduitsCommandePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitsCommandePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsCommandePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
