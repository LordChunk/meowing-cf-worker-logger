/* tslint:disable */
/* eslint-disable */
import { HttpRequest } from './http-request';
export interface RequestUrl {
  id?: number;
  requests?: null | Array<HttpRequest>;
  url: string;
}
