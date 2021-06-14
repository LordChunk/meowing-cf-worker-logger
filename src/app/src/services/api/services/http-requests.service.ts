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
   * To access only the response body, use `httpRequestsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<HttpRequest>>> {

    const rb = new RequestBuilder(this.rootUrl, HttpRequestsService.HttpRequestsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<HttpRequest>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `httpRequestsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsGet$Plain(params?: {
  }): Observable<Array<HttpRequest>> {

    return this.httpRequestsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<HttpRequest>>) => r.body as Array<HttpRequest>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpRequestsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<HttpRequest>>> {

    const rb = new RequestBuilder(this.rootUrl, HttpRequestsService.HttpRequestsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<HttpRequest>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `httpRequestsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsGet$Json(params?: {
  }): Observable<Array<HttpRequest>> {

    return this.httpRequestsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<HttpRequest>>) => r.body as Array<HttpRequest>)
    );
  }

  /**
   * Path part for operation httpRequestsPost
   */
  static readonly HttpRequestsPostPath = '/HttpRequests';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpRequestsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  httpRequestsPost$Plain$Response(params?: {
    body?: HttpRequestDto
  }): Observable<StrictHttpResponse<HttpRequest>> {

    const rb = new RequestBuilder(this.rootUrl, HttpRequestsService.HttpRequestsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HttpRequest>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `httpRequestsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  httpRequestsPost$Plain(params?: {
    body?: HttpRequestDto
  }): Observable<HttpRequest> {

    return this.httpRequestsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<HttpRequest>) => r.body as HttpRequest)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpRequestsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  httpRequestsPost$Json$Response(params?: {
    body?: HttpRequestDto
  }): Observable<StrictHttpResponse<HttpRequest>> {

    const rb = new RequestBuilder(this.rootUrl, HttpRequestsService.HttpRequestsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HttpRequest>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `httpRequestsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  httpRequestsPost$Json(params?: {
    body?: HttpRequestDto
  }): Observable<HttpRequest> {

    return this.httpRequestsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<HttpRequest>) => r.body as HttpRequest)
    );
  }

  /**
   * Path part for operation httpRequestsIdGet
   */
  static readonly HttpRequestsIdGetPath = '/HttpRequests/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpRequestsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<HttpRequest>> {

    const rb = new RequestBuilder(this.rootUrl, HttpRequestsService.HttpRequestsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HttpRequest>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `httpRequestsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsIdGet$Plain(params: {
    id: number;
  }): Observable<HttpRequest> {

    return this.httpRequestsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<HttpRequest>) => r.body as HttpRequest)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpRequestsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<HttpRequest>> {

    const rb = new RequestBuilder(this.rootUrl, HttpRequestsService.HttpRequestsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HttpRequest>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `httpRequestsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsIdGet$Json(params: {
    id: number;
  }): Observable<HttpRequest> {

    return this.httpRequestsIdGet$Json$Response(params).pipe(
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
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  httpRequestsIdPut$Response(params: {
    id: number;
    body?: HttpRequest
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, HttpRequestsService.HttpRequestsIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
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
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
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
   * To access only the response body, use `httpRequestsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<HttpRequest>> {

    const rb = new RequestBuilder(this.rootUrl, HttpRequestsService.HttpRequestsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HttpRequest>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `httpRequestsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsIdDelete$Plain(params: {
    id: number;
  }): Observable<HttpRequest> {

    return this.httpRequestsIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<HttpRequest>) => r.body as HttpRequest)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpRequestsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<HttpRequest>> {

    const rb = new RequestBuilder(this.rootUrl, HttpRequestsService.HttpRequestsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HttpRequest>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `httpRequestsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsIdDelete$Json(params: {
    id: number;
  }): Observable<HttpRequest> {

    return this.httpRequestsIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<HttpRequest>) => r.body as HttpRequest)
    );
  }

  /**
   * Path part for operation httpRequestsRecentCountGet
   */
  static readonly HttpRequestsRecentCountGetPath = '/HttpRequests/recent/{count}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpRequestsRecentCountGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsRecentCountGet$Plain$Response(params: {
    count: number;
  }): Observable<StrictHttpResponse<Array<HttpRequest>>> {

    const rb = new RequestBuilder(this.rootUrl, HttpRequestsService.HttpRequestsRecentCountGetPath, 'get');
    if (params) {
      rb.path('count', params.count, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<HttpRequest>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `httpRequestsRecentCountGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsRecentCountGet$Plain(params: {
    count: number;
  }): Observable<Array<HttpRequest>> {

    return this.httpRequestsRecentCountGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<HttpRequest>>) => r.body as Array<HttpRequest>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `httpRequestsRecentCountGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsRecentCountGet$Json$Response(params: {
    count: number;
  }): Observable<StrictHttpResponse<Array<HttpRequest>>> {

    const rb = new RequestBuilder(this.rootUrl, HttpRequestsService.HttpRequestsRecentCountGetPath, 'get');
    if (params) {
      rb.path('count', params.count, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<HttpRequest>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `httpRequestsRecentCountGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  httpRequestsRecentCountGet$Json(params: {
    count: number;
  }): Observable<Array<HttpRequest>> {

    return this.httpRequestsRecentCountGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<HttpRequest>>) => r.body as Array<HttpRequest>)
    );
  }

}
