import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PrefencesComponent } from './prefences/prefences.component';


const routes: Routes = [
  { path: 'user', component: PrefencesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRouteModule{};
