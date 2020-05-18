import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CovmanComponent } from './main-part/covman/covman.component';
import { LinesComponent } from './main-part/lines/lines.component';
import { PointsComponent } from './main-part/points/points.component';
import { Points100Component } from './main-part/points100/points100.component';
import { PointsTableComponent } from './main-part/points-table/points-table.component';
import { CovEnemyComponent } from './main-part/cov-enemy/cov-enemy.component';
import { MainComponent } from './main-part/main.component';

import { PlaygroundDirective } from './custom-directives/playground.directive';
import { MyLoseliveDirective } from './custom-directives/my-loselive.directive';

import { UserModule } from './user/user.module';




const routes: Routes = [   
   { path:'game', component: MainComponent },
   { path:'hallo', component: CovmanComponent },
   { path:'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)  },
   { path:'', redirectTo:'', pathMatch:'full'}
 ];


@NgModule({
   declarations: [
      AppComponent,
      MainComponent,
      CovmanComponent,
      LinesComponent,
      Points100Component,
      PointsComponent,
      PointsTableComponent,
      CovEnemyComponent,
      PlaygroundDirective,
      MyLoseliveDirective
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
