/* tslint:disable */
/* eslint-disable */
import { CfHttpHeader } from './cf-http-header';
import { HttpHeader } from './http-header';
import { RequestUrl } from './request-url';
export interface HttpRequest {
  body?: null | string;
  bodyUsed?: boolean;
  cf?: CfHttpHeader;
  contentLength: number;
  fetchers?: null | string;
  headers?: null | Array<HttpHeader>;
  id: number;
  method: string;
  redirect?: null | string;
  url?: RequestUrl;
  urlId: number;
}
