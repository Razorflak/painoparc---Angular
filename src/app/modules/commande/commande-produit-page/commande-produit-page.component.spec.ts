import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeProduitPageComponent } from './commande-produit-page.component';

describe('CommandeProduitPageComponent', () => {
  let component: CommandeProduitPageComponent;
  let fixture: ComponentFixture<CommandeProduitPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeProduitPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeProduitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
