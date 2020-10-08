import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriPanierPageComponent } from './favori-panier-page.component';

describe('FavoriPanierPageComponent', () => {
  let component: FavoriPanierPageComponent;
  let fixture: ComponentFixture<FavoriPanierPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriPanierPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriPanierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
