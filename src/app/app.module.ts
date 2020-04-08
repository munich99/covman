import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CovmanComponent } from './main-part/covman/covman.component';

import { PlaygroundDirective } from './custom-directives/playground.directive'

@NgModule({
  declarations: [
    AppComponent, 
    CovmanComponent,
    PlaygroundDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
