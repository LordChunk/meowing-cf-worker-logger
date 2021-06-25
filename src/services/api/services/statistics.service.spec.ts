import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ApiConfiguration } from '../api-configuration';
import { StatisticsService } from './statistics.service';

describe('StatisticsService', () => {
  let service: StatisticsService;

  beforeEach(() => {
    const apiConfigurationStub = () => ({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        StatisticsService,
        { provide: ApiConfiguration, useFactory: apiConfigurationStub }
      ]
    });
    service = TestBed.inject(StatisticsService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`StatisticsRequestsPerCountryGetPath has default value`, () => {
    expect(StatisticsService.StatisticsRequestsPerCountryGetPath).toEqual(
      `/Statistics/RequestsPerCountry`
    );
  });

  it(`StatisticsRequestsPerUrlGetPath has default value`, () => {
    expect(StatisticsService.StatisticsRequestsPerUrlGetPath).toEqual(
      `/Statistics/RequestsPerUrl`
    );
  });
});
