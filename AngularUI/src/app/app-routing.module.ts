import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AggregateCalculatorComponent } from './aggregate-calculator/CalcuateResult';

import { DisplayResultComponent } from './display-result/display-result.component';

const routes: Routes = [{path:'',component:AggregateCalculatorComponent},
{path:'Add',component:DisplayResultComponent},
{path:'Home',component:AggregateCalculatorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
