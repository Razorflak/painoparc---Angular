import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceCommandeCardComponent } from './commerce-commande-card.component';

describe('CommerceCommandeCardComponent', () => {
  let component: CommerceCommandeCardComponent;
  let fixture: ComponentFixture<CommerceCommandeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerceCommandeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerceCommandeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
