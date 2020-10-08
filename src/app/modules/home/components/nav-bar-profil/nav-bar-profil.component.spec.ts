import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarProfilComponent } from './nav-bar-profil.component';

describe('NavBarProfilComponent', () => {
  let component: NavBarProfilComponent;
  let fixture: ComponentFixture<NavBarProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
