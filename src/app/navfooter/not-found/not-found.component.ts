import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {

  public isServer: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Platform) {
    if (isPlatformServer(this.platformId)) {
      this.isServer = true;
    } else {
      this.isServer = false;
    }
   }

}
