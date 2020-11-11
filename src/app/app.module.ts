import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavfooterModule } from './navfooter/navfooter.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { ComponentsModule } from './components/components.module';

import { HttpClientModule } from '@angular/common/http';

// import { AuthService } from './services/authentication.service';
import { HttpRequestLogsService } from './services/http-request-logs.service';

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
    LoginModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    // AuthService,
    HttpRequestLogsService,
  ],
})
export class AppModule { }
