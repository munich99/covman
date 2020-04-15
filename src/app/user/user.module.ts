import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrefencesComponent } from './prefences/prefences.component';
import { ColorpickerComponent } from './prefences/colorpicker/colorpicker.component';

import { UserRouteModule } from './user-route.module';

@NgModule({
  declarations: [
    ColorpickerComponent,
    PrefencesComponent
  ],
  imports: [
    UserRouteModule,
    CommonModule
  ]

})
export class UserModule { }
