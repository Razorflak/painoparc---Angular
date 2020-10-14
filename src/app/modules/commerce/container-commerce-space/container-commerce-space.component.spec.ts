import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCommerceSpaceComponent } from './container-commerce-space.component';

describe('ContainerCommerceSpaceComponent', () => {
  let component: ContainerCommerceSpaceComponent;
  let fixture: ComponentFixture<ContainerCommerceSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerCommerceSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerCommerceSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
