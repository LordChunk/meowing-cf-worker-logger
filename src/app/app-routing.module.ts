import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './navfooter/not-found/not-found.component';
import { ShortTermDashboardComponent } from './short-term-dashboard/short-term-dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'recent', component: ShortTermDashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
}),
    BrowserModule,
  ],

  exports: [RouterModule],
})
export class AppRoutingModule { }

