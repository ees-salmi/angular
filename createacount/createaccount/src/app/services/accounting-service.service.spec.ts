import { TestBed } from '@angular/core/testing';

import { AccountingServiceService } from './accounting-service.service';

describe('AccountingServiceService', () => {
  let service: AccountingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
