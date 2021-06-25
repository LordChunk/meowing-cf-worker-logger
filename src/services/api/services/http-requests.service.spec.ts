import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ApiConfiguration } from '../api-configuration';
import { HttpRequestsService } from './http-requests.service';

describe('HttpRequestsService', () => {
  let service: HttpRequestsService;

  beforeEach(() => {
    const apiConfigurationStub = () => ({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpRequestsService,
        { provide: ApiConfiguration, useFactory: apiConfigurationStub }
      ]
    });
    service = TestBed.inject(HttpRequestsService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`HttpRequestsGetPath has default value`, () => {
    expect(HttpRequestsService.HttpRequestsGetPath).toEqual(`/HttpRequests`);
  });

  it(`HttpRequestsPostPath has default value`, () => {
    expect(HttpRequestsService.HttpRequestsPostPath).toEqual(`/HttpRequests`);
  });

  it(`HttpRequestsIdGetPath has default value`, () => {
    expect(HttpRequestsService.HttpRequestsIdGetPath).toEqual(
      `/HttpRequests/{id}`
    );
  });

  it(`HttpRequestsIdPutPath has default value`, () => {
    expect(HttpRequestsService.HttpRequestsIdPutPath).toEqual(
      `/HttpRequests/{id}`
    );
  });

  it(`HttpRequestsIdDeletePath has default value`, () => {
    expect(HttpRequestsService.HttpRequestsIdDeletePath).toEqual(
      `/HttpRequests/{id}`
    );
  });

  it(`HttpRequestsRecentCountGetPath has default value`, () => {
    expect(HttpRequestsService.HttpRequestsRecentCountGetPath).toEqual(
      `/HttpRequests/recent/{count}`
    );
  });
});
