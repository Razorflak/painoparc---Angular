import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitDisplayDetailsComponent } from './produit-display-details.component';

describe('ProduitDisplayDetailsComponent', () => {
  let component: ProduitDisplayDetailsComponent;
  let fixture: ComponentFixture<ProduitDisplayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitDisplayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitDisplayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
