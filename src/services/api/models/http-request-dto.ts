/* tslint:disable */
/* eslint-disable */
export interface HttpRequestDto {
  body?: null | string;
  bodyUsed?: boolean;
  contentLength: number;
  fetchers?: null | string;
  headers?: null | Array<Array<string>>;
  id: number;
  method: string;
  redirect?: null | string;
  url?: null | string;
}
