import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeLivraisonPageComponent } from './commande-livraison-page.component';

describe('CommandeLivraisonPageComponent', () => {
  let component: CommandeLivraisonPageComponent;
  let fixture: ComponentFixture<CommandeLivraisonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeLivraisonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeLivraisonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
