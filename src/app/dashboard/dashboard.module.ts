import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
