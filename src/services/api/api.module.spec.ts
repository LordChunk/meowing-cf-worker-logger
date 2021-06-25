import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ApiConfigurationParams } from './api-configuration';
import { ApiModule } from './api.module';

describe('ApiModule', () => {
  let pipe: ApiModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiModule]
    });
    pipe = TestBed.inject(ApiModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
