import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { AvatarComponent } from './avatar/avatar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';



@NgModule({
  declarations: [
    BannerComponent,
    AvatarComponent,
    TopNavBarComponent
  ],
  exports: [
    BannerComponent,
    AvatarComponent,
    TopNavBarComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class HeaderModule { }
