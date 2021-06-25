import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { NAVITEMS } from '../../models/nav-item.model';
import { RouterTestingModule } from '@angular/router/testing';
import { NavComponent } from './nav.component';
import { environment } from 'src/environments/environment';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(() => {
    const mediaMatcherStub = () => ({
      matchMedia: (string: any) => ({ addEventListener: () => ({}) })
    });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [NavComponent],
      providers: [{ provide: MediaMatcher, useFactory: mediaMatcherStub }]
    });
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`navItems has default value`, () => {
    expect(component.navItems).toEqual(NAVITEMS);
  });

  it(`appName has default value`, () => {
    expect(component.appName).toEqual(environment.appName);
  });

  it(`useNavigationInOverMode has default value`, () => {
    expect(component.useNavigationInOverMode).toEqual(false);
  });
});
