import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselFolderImgComponent } from './carrousel-folder-img.component';

describe('CarrouselFolderImgComponent', () => {
  let component: CarrouselFolderImgComponent;
  let fixture: ComponentFixture<CarrouselFolderImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrouselFolderImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselFolderImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
