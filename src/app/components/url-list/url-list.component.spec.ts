import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UrlListComponent } from './url-list.component';

describe('UrlListComponent', () => {
  let component: UrlListComponent;
  let fixture: ComponentFixture<UrlListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [UrlListComponent]
    });
    fixture = TestBed.createComponent(UrlListComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`displayedColumns has default value`, () => {
    expect(component.displayedColumns).toEqual([
      `shortLabel`,
      `value`,
      `label`
    ]);
  });
});
