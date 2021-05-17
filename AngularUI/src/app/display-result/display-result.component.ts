import { Component, OnInit,Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalculatedResult } from 'src/Models/CalculatedResult';
import { Router } from '@angular/router';
import {AggregateCalculatorDataService} from '../DataService/AggregateCalculatorDataService'
@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.sass']
})
export class DisplayResultComponent implements OnInit {
  
  dataavailable: Boolean = false;
  @Input()  message: string = "";
  @Input()  cleardata: boolean = false;
  @Output() nameEvent = new EventEmitter<string>();
  objInput:CalculatedResult;
  @Input() objcalcresult:CalculatedResult=new CalculatedResult();
  @ViewChild('closeBtn') cb: ElementRef;
constructor(private dataservice:AggregateCalculatorDataService,private route:Router) {
 
 }
 
  ngOnInit() {
   this.SetValidationResult();
  }

  SetValidationResult(){  
        document.getElementById("lblMessage").innerHTML = this.message;
  }  
  

}
