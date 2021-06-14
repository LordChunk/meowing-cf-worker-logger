/* tslint:disable */
/* eslint-disable */
import { HttpRequest } from './http-request';
export interface HttpHeader {
  header: string;
  httpRequests?: null | Array<HttpRequest>;
  id?: number;
  value: string;
}
