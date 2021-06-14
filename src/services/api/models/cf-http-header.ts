/* tslint:disable */
/* eslint-disable */
import { TlsClientAuth } from './tls-client-auth';
import { TlsExportedAuthenticator } from './tls-exported-authenticator';
export interface CfHttpHeader {
  asn?: null | string;
  clientAcceptEncoding?: null | string;
  clientTcpRtt?: number;
  colo?: null | string;
  country?: null | string;
  edgeRequestKeepAliveStatus?: number;
  httpProtocol?: null | string;
  id: number;
  requestPriority?: null | string;
  tlsCipher?: null | string;
  tlsClientAuth?: TlsClientAuth;
  tlsExportedAuthenticator?: TlsExportedAuthenticator;
  tlsVersion?: null | string;
}
