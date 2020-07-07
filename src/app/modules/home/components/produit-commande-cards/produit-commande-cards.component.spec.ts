import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitCommandeCardsComponent } from './produit-commande-cards.component';

describe('ProduitCommandeCardsComponent', () => {
  let component: ProduitCommandeCardsComponent;
  let fixture: ComponentFixture<ProduitCommandeCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitCommandeCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitCommandeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
