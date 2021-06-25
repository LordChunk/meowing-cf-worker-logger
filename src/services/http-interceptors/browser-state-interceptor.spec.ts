import { TestBed } from '@angular/core/testing';
import { HttpHandler } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { TransferState } from '@angular/platform-browser';
import { BrowserStateInterceptor } from './browser-state-interceptor';

describe('BrowserStateInterceptor', () => {
  let service: BrowserStateInterceptor;

  beforeEach(() => {
    const transferStateStub = () => ({ get: (key: any, arg: any) => ({}) });
    TestBed.configureTestingModule({
      providers: [
        BrowserStateInterceptor,
        { provide: TransferState, useFactory: transferStateStub }
      ]
    });
    service = TestBed.inject(BrowserStateInterceptor);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('intercept', () => {
    it('makes expected calls', () => {
      const httpHandlerStub: HttpHandler = <any>{};
      const httpRequestStub: HttpRequest<any> = <any>{};
      const transferStateStub: TransferState = TestBed.inject(TransferState);
      spyOn(httpHandlerStub, 'handle').and.callThrough();
      spyOn(transferStateStub, 'get').and.callThrough();
      service.intercept(httpRequestStub, httpHandlerStub);
      expect(httpHandlerStub.handle).toHaveBeenCalled();
      expect(transferStateStub.get).toHaveBeenCalled();
    });
  });
});
