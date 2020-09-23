import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeCommercesPageComponent } from './commande-commerces-page.component';

describe('CommandeCommercesPageComponent', () => {
  let component: CommandeCommercesPageComponent;
  let fixture: ComponentFixture<CommandeCommercesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeCommercesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeCommercesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
