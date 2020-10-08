import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeValidePageComponent } from './commande-valide-page.component';

describe('CommandeValidePageComponent', () => {
  let component: CommandeValidePageComponent;
  let fixture: ComponentFixture<CommandeValidePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeValidePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeValidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
