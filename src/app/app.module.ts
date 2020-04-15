import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CovmanComponent } from './main-part/covman/covman.component';
import { LinesComponent } from './main-part/lines/lines.component';

import { PlaygroundDirective } from './custom-directives/playground.directive';

import { UserModule } from './user/user.module';




const routes: Routes = [   
   { path:'game', component: CovmanComponent },
   { path:'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)  },
   { path:'', redirectTo:'', pathMatch:'full'}
 ];


@NgModule({
   declarations: [
      AppComponent,
      CovmanComponent,
      LinesComponent,
      PlaygroundDirective
   ],
   imports: [
      BrowserModule,
      UserModule,
      RouterModule.forRoot(routes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
