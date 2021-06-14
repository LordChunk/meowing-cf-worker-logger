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

import { HttpRequest } from '../models/http-request';
import { HttpRequestDto } from '../models/http-request-dto';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation httpRequestsGet
   */
  static readonly HttpRequestsGetPath = '/HttpRequests';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpRequestsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsGet$Response(params?: {
  }): Observable<StrictHttpResponse<Array<HttpRequest>>> {

    const rb = new RequestBuilder(this.rootUrl, HttpRequestsService.HttpRequestsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<HttpRequest>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `httpRequestsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsGet(params?: {
  }): Observable<Array<HttpRequest>> {

    return this.httpRequestsGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<HttpRequest>>) => r.body as Array<HttpRequest>)
    );
  }

  /**
   * Path part for operation httpRequestsPost
   */
  static readonly HttpRequestsPostPath = '/HttpRequests';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpRequestsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpRequestsPost$Response(params?: {
    body?: HttpRequestDto
  }): Observable<StrictHttpResponse<HttpRequest>> {

    const rb = new RequestBuilder(this.rootUrl, HttpRequestsService.HttpRequestsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HttpRequest>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `httpRequestsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpRequestsPost(params?: {
    body?: HttpRequestDto
  }): Observable<HttpRequest> {

    return this.httpRequestsPost$Response(params).pipe(
      map((r: StrictHttpResponse<HttpRequest>) => r.body as HttpRequest)
    );
  }

  /**
   * Path part for operation httpRequestsIdGet
   */
  static readonly HttpRequestsIdGetPath = '/HttpRequests/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpRequestsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsIdGet$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<HttpRequest>> {

    const rb = new RequestBuilder(this.rootUrl, HttpRequestsService.HttpRequestsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HttpRequest>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `httpRequestsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsIdGet(params: {
    id: number;
  }): Observable<HttpRequest> {

    return this.httpRequestsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<HttpRequest>) => r.body as HttpRequest)
    );
  }

  /**
   * Path part for operation httpRequestsIdPut
   */
  static readonly HttpRequestsIdPutPath = '/HttpRequests/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpRequestsIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpRequestsIdPut$Response(params: {
    id: number;
    body?: HttpRequest
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, HttpRequestsService.HttpRequestsIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `httpRequestsIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  httpRequestsIdPut(params: {
    id: number;
    body?: HttpRequest
  }): Observable<void> {

    return this.httpRequestsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation httpRequestsIdDelete
   */
  static readonly HttpRequestsIdDeletePath = '/HttpRequests/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpRequestsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<HttpRequest>> {

    const rb = new RequestBuilder(this.rootUrl, HttpRequestsService.HttpRequestsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HttpRequest>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `httpRequestsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsIdDelete(params: {
    id: number;
  }): Observable<HttpRequest> {

    return this.httpRequestsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<HttpRequest>) => r.body as HttpRequest)
    );
  }

  /**
   * Path part for operation httpRequestsRecentCountGet
   */
  static readonly HttpRequestsRecentCountGetPath = '/HttpRequests/recent/{count}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpRequestsRecentCountGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsRecentCountGet$Response(params: {
    count: number;
  }): Observable<StrictHttpResponse<Array<HttpRequest>>> {

    const rb = new RequestBuilder(this.rootUrl, HttpRequestsService.HttpRequestsRecentCountGetPath, 'get');
    if (params) {
      rb.path('count', params.count, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<HttpRequest>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `httpRequestsRecentCountGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsRecentCountGet(params: {
    count: number;
  }): Observable<Array<HttpRequest>> {

    return this.httpRequestsRecentCountGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<HttpRequest>>) => r.body as Array<HttpRequest>)
    );
  }

}
