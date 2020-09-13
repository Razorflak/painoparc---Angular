import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommndeLivraisonPageComponent } from './commnde-livraison-page.component';

describe('CommndeLivraisonPageComponent', () => {
  let component: CommndeLivraisonPageComponent;
  let fixture: ComponentFixture<CommndeLivraisonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommndeLivraisonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommndeLivraisonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
