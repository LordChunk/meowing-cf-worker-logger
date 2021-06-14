/* tslint:disable */
/* eslint-disable */
import { CfHttpHeader } from './cf-http-header';
export interface HttpRequestDto {
  body?: null | string;
  bodyUsed?: boolean;
  cf?: CfHttpHeader;
  contentLength: number;
  fetchers?: null | string;
  headers?: null | Array<Array<string>>;
  id: number;
  method: string;
  redirect?: null | string;
  url?: null | string;
}
