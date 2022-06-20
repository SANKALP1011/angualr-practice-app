import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';

const routes: Routes = [
  {path: "heros",component: HeroComponent},
  {path:"details/:id",component: HeroDetailsComponent},
  {path:"dash",component: DashbaordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
