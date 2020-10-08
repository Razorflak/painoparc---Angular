import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCommandeComponent } from './container-commande.component';

describe('ContainerCommandeComponent', () => {
  let component: ContainerCommandeComponent;
  let fixture: ComponentFixture<ContainerCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
