import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitQteDateLivraisonComponent } from './produit-qte-date-livraison.component';

describe('ProduitQteDateLivraisonComponent', () => {
  let component: ProduitQteDateLivraisonComponent;
  let fixture: ComponentFixture<ProduitQteDateLivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitQteDateLivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitQteDateLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
