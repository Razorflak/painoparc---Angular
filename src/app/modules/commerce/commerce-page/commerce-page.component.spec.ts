import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercePageComponent } from './commerce-page.component';

describe('CommercePageComponent', () => {
  let component: CommercePageComponent;
  let fixture: ComponentFixture<CommercePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
