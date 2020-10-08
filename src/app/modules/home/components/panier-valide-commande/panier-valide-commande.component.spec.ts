import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierValideCommandeComponent } from './panier-valide-commande.component';

describe('PanierValideCommandeComponent', () => {
  let component: PanierValideCommandeComponent;
  let fixture: ComponentFixture<PanierValideCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierValideCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierValideCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
