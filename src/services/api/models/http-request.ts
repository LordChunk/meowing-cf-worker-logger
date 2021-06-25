/* tslint:disable */
/* eslint-disable */
import { HttpHeader } from './http-header';
import { RequestUrl } from './request-url';
export interface HttpRequest {
  body?: null | string;
  bodyUsed?: boolean;
  contentLength: number;
  fetchers?: null | string;
  headers?: null | Array<HttpHeader>;
  id: number;
  method: string;
  redirect?: null | string;
  url?: RequestUrl;
  urlId: number;
}
