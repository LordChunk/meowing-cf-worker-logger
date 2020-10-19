import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryPieComponent } from './country-pie/country-pie.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [CountryPieComponent],
  imports: [
    ChartsModule,
    CommonModule
  ],
  exports: [
    CountryPieComponent
  ],
})
export class ComponentsModule { }
