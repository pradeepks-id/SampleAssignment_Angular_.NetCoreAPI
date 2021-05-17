import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AggregateCalculatorComponent } from './aggregate-calculator/CalcuateResult';
import { DisplayResultComponent } from './display-result/display-result.component';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AggregateCalculatorDataService} from './DataService/AggregateCalculatorDataService'
@NgModule({
  declarations: [
    AppComponent,
    AggregateCalculatorComponent,
    DisplayResultComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [AggregateCalculatorDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
