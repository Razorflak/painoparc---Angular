import { TestBed } from '@angular/core/testing';

import { PanierSvcService } from './panier-svc.service';

describe('PanierSvcService', () => {
  let service: PanierSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanierSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
