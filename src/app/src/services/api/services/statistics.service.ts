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
   * To access only the response body, use `statisticsRequestsPerCountryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  statisticsRequestsPerCountryGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<any>>> {

    const rb = new RequestBuilder(this.rootUrl, StatisticsService.StatisticsRequestsPerCountryGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<any>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `statisticsRequestsPerCountryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  statisticsRequestsPerCountryGet$Plain(params?: {
  }): Observable<Array<any>> {

    return this.statisticsRequestsPerCountryGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<any>>) => r.body as Array<any>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `statisticsRequestsPerCountryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  statisticsRequestsPerCountryGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<any>>> {

    const rb = new RequestBuilder(this.rootUrl, StatisticsService.StatisticsRequestsPerCountryGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<any>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `statisticsRequestsPerCountryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  statisticsRequestsPerCountryGet$Json(params?: {
  }): Observable<Array<any>> {

    return this.statisticsRequestsPerCountryGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<any>>) => r.body as Array<any>)
    );
  }

  /**
   * Path part for operation statisticsRequestsPerUrlGet
   */
  static readonly StatisticsRequestsPerUrlGetPath = '/Statistics/RequestsPerUrl';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `statisticsRequestsPerUrlGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  statisticsRequestsPerUrlGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<any>>> {

    const rb = new RequestBuilder(this.rootUrl, StatisticsService.StatisticsRequestsPerUrlGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<any>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `statisticsRequestsPerUrlGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  statisticsRequestsPerUrlGet$Plain(params?: {
  }): Observable<Array<any>> {

    return this.statisticsRequestsPerUrlGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<any>>) => r.body as Array<any>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `statisticsRequestsPerUrlGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  statisticsRequestsPerUrlGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<any>>> {

    const rb = new RequestBuilder(this.rootUrl, StatisticsService.StatisticsRequestsPerUrlGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<any>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `statisticsRequestsPerUrlGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  statisticsRequestsPerUrlGet$Json(params?: {
  }): Observable<Array<any>> {

    return this.statisticsRequestsPerUrlGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<any>>) => r.body as Array<any>)
    );
  }

}
