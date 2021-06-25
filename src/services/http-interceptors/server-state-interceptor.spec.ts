import { TestBed } from '@angular/core/testing';
import { HttpHandler } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { TransferState } from '@angular/platform-browser';
import { ServerStateInterceptor } from './server-state-interceptor';

describe('ServerStateInterceptor', () => {
  let service: ServerStateInterceptor;

  beforeEach(() => {
    const transferStateStub = () => ({ set: (arg: any, body: any) => ({}) });
    TestBed.configureTestingModule({
      providers: [
        ServerStateInterceptor,
        { provide: TransferState, useFactory: transferStateStub }
      ]
    });
    service = TestBed.inject(ServerStateInterceptor);
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
      spyOn(transferStateStub, 'set').and.callThrough();
      service.intercept(httpRequestStub, httpHandlerStub);
      expect(httpHandlerStub.handle).toHaveBeenCalled();
      expect(transferStateStub.set).toHaveBeenCalled();
    });
  });
});
