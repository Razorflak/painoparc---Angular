import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierRecapMobilComponent } from './panier-recap-mobil.component';

describe('PanierRecapMobilComponent', () => {
  let component: PanierRecapMobilComponent;
  let fixture: ComponentFixture<PanierRecapMobilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierRecapMobilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierRecapMobilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
