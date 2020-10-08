import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerProfilSpaceComponent } from './container-profil-space.component';

describe('ContainerProfilSpaceComponent', () => {
  let component: ContainerProfilSpaceComponent;
  let fixture: ComponentFixture<ContainerProfilSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerProfilSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerProfilSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
