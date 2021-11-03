import { TestBed } from '@angular/core/testing';

import { ResgistroLeadService } from './resgistro-lead.service';

describe('ResgistroLeadService', () => {
  let service: ResgistroLeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResgistroLeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
