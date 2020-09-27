import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCommandeComponent } from './navbar-commande.component';

describe('NavbarCommandeComponent', () => {
  let component: NavbarCommandeComponent;
  let fixture: ComponentFixture<NavbarCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
