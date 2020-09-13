import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitLivraisonCardComponent } from './produit-livraison-card.component';

describe('ProduitLivraisonCardComponent', () => {
  let component: ProduitLivraisonCardComponent;
  let fixture: ComponentFixture<ProduitLivraisonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitLivraisonCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitLivraisonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
