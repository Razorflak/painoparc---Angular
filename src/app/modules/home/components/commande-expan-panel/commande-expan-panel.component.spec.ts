import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeExpanPanelComponent } from './commande-expan-panel.component';

describe('CommandeExpanPanelComponent', () => {
  let component: CommandeExpanPanelComponent;
  let fixture: ComponentFixture<CommandeExpanPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeExpanPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeExpanPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
