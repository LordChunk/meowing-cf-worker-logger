/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class StatisticsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation statisticsRequestsPerCountryGet
   */
  static readonly StatisticsRequestsPerCountryGetPath = '/Statistics/RequestsPerCountry';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `statisticsRequestsPerCountryGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  statisticsRequestsPerCountryGet$Response(params?: {
  }): Observable<StrictHttpResponse<Array<any>>> {

    const rb = new RequestBuilder(this.rootUrl, StatisticsService.StatisticsRequestsPerCountryGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<any>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `statisticsRequestsPerCountryGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  statisticsRequestsPerCountryGet(params?: {
  }): Observable<Array<any>> {

    return this.statisticsRequestsPerCountryGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<any>>) => r.body as Array<any>)
    );
  }

  /**
   * Path part for operation statisticsRequestsPerUrlGet
   */
  static readonly StatisticsRequestsPerUrlGetPath = '/Statistics/RequestsPerUrl';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `statisticsRequestsPerUrlGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  statisticsRequestsPerUrlGet$Response(params?: {
  }): Observable<StrictHttpResponse<Array<any>>> {

    const rb = new RequestBuilder(this.rootUrl, StatisticsService.StatisticsRequestsPerUrlGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<any>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `statisticsRequestsPerUrlGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  statisticsRequestsPerUrlGet(params?: {
  }): Observable<Array<any>> {

    return this.statisticsRequestsPerUrlGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<any>>) => r.body as Array<any>)
    );
  }

}
