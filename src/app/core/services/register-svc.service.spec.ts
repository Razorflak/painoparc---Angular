import { TestBed } from '@angular/core/testing';

import { RegisterSvcService } from './register-svc.service';

describe('RegisterSvcService', () => {
  let service: RegisterSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
