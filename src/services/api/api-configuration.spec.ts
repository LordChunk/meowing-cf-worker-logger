import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { ApiConfiguration } from './api-configuration';

describe('ApiConfiguration', () => {
  let service: ApiConfiguration;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ApiConfiguration] });
    service = TestBed.inject(ApiConfiguration);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`rootUrl has default value`, () => {
    expect(service.rootUrl).toEqual(environment.apiEndPoint);
  });
});
