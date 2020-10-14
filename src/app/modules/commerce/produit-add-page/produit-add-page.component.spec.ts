import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitAddPageComponent } from './produit-add-page.component';

describe('ProduitAddPageComponent', () => {
  let component: ProduitAddPageComponent;
  let fixture: ComponentFixture<ProduitAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitAddPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
