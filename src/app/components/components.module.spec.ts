import { TestBed } from '@angular/core/testing';
import { ComponentsModule } from './components.module';

describe('ComponentsModule', () => {
  let pipe: ComponentsModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ComponentsModule] });
    pipe = TestBed.inject(ComponentsModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
