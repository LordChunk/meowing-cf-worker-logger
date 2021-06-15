import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavfooterModule } from './navfooter/navfooter.module';

import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from '../services/api/api.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavfooterModule,
    BrowserAnimationsModule,
    ApiModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [
  ],
})
export class AppModule { }
