import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';


// Angular material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    RouterModule,
    MatButtonModule,
  ],
  declarations: [
    NavComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  exports: [
    NavComponent,
    FooterComponent,
  ],
})
export class NavfooterModule { }
