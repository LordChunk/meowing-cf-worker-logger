import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './navfooter/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  // { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
  ],

  exports: [RouterModule],
})
export class AppRoutingModule { }

