import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavfooterModule } from './navfooter/navfooter.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ComponentsModule } from './components/components.module';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    NavfooterModule,
    BrowserAnimationsModule,
    DashboardModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    // HttpRequestLogsService,
  ],
})
export class AppModule { }
