import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceLstProduitPageComponent } from './commerce-lst-produit-page.component';

describe('CommerceLstProduitPageComponent', () => {
  let component: CommerceLstProduitPageComponent;
  let fixture: ComponentFixture<CommerceLstProduitPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerceLstProduitPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerceLstProduitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
