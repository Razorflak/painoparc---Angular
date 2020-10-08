import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueCommandePageComponent } from './historique-commande-page.component';

describe('HistoriqueCommandePageComponent', () => {
  let component: HistoriqueCommandePageComponent;
  let fixture: ComponentFixture<HistoriqueCommandePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueCommandePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueCommandePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
