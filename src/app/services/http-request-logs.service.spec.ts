import { TestBed } from '@angular/core/testing';

import { HttpRequestLogsService } from './http-request-logs.service';

describe('HttpRequestLogsService', () => {
  let service: HttpRequestLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRequestLogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
