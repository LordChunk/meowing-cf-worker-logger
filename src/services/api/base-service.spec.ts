import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ApiConfiguration } from './api-configuration';
import { BaseService } from './base-service';

describe('BaseService', () => {
  let service: BaseService;

  beforeEach(() => {
    const apiConfigurationStub = () => ({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BaseService,
        { provide: ApiConfiguration, useFactory: apiConfigurationStub }
      ]
    });
    service = TestBed.inject(BaseService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
