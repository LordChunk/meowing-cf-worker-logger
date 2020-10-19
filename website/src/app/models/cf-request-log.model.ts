export interface CfRequestLog {
  request: Request;
  date: string;
}

interface Request {
  url: string;
  cf: Cf;
  method: string;
  body?: any;
  headers: Headers;
  fetcher: Fetcher;
  bodyUsed: boolean;
  redirect: string;
}

interface Fetcher {
}

interface Headers {
  'cf-connecting-ip': string;
  'x-real-ip': string;
  'cf-ray': string;
  host: string;
  'cf-visitor': string;
  'user-agent': string;
  'x-forwarded-proto': string;
  'cf-ipcountry': string;
  'cf-request-id': string;
  connection: string;
  'accept-charset': string;
  accept: string;
  'accept-encoding': string;
}

interface Cf {
  asn: number;
  clientAcceptEncoding: string;
  clientTcpRtt: number;
  colo: string;
  country: string;
  tlsVersion: string;
  tlsCipher: string;
  edgeRequestKeepAliveStatus: number;
  requestPriority: string;
  tlsClientAuth: TlsClientAuth;
  httpProtocol: string;
  tlsExportedAuthenticator: TlsExportedAuthenticator;
}

interface TlsExportedAuthenticator {
  serverFinished: string;
  clientHandshake: string;
  serverHandshake: string;
  clientFinished: string;
}

interface TlsClientAuth {
  certIssuerDNRFC2253: string;
  certFingerprintSHA1: string;
  certSubjectDNLegacy: string;
  certPresented: string;
  certIssuerDNLegacy: string;
  certSubjectDN: string;
  certNotBefore: string;
  certNotAfter: string;
  certSubjectDNRFC2253: string;
  certVerified: string;
  certSerial: string;
  certIssuerDN: string;
}
