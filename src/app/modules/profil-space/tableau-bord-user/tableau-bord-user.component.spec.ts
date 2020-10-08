import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauBordUserComponent } from './tableau-bord-user.component';

describe('TableauBordUserComponent', () => {
  let component: TableauBordUserComponent;
  let fixture: ComponentFixture<TableauBordUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauBordUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauBordUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
