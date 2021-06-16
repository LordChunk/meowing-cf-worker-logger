import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { CountryPieComponent } from './country-pie/country-pie.component';

@NgModule({
  declarations: [
    CountryPieComponent
  ],
  imports: [
    ChartsModule,
    CommonModule,
  ],
  exports: [
    CountryPieComponent,
  ],
})
export class ComponentsModule { }
