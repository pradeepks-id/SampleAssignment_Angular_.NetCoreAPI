import { Component, OnInit, ViewChild } from '@angular/core';
import { DisplayResultComponent } from '../display-result/display-result.component';
import { AggregateCalculatorDataService } from '../DataService/AggregateCalculatorDataService'
import { CalculatedResult } from 'src/Models/CalculatedResult'
import { InputValues } from 'src/Models/InputValues'
import { Router } from '@angular/router';
@Component({
  selector: 'app-aggregate-calculator',
  templateUrl: './aggregate-calculator.component.html',
  styleUrls: ['./aggregate-calculator.component.sass']
})
export class AggregateCalculatorComponent implements OnInit {


  fieldArray: Array<any> = [];
  newAttribute: any = {};
  inputVals: string = "";
  validationMessage: string = "";
  inputvalues:InputValues = new InputValues();
  calculatedResult:CalculatedResult;
  constructor(private dataservce: AggregateCalculatorDataService, private route: Router) {

  }

  ngOnInit() {
  }

  
  @ViewChild('dispresult') displayresultcomponent: DisplayResultComponent

  addFieldValue(index) {    
      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  ClearInputData() {    
    for(var i=0;i<this.fieldArray.length;i++)
    {
      this.fieldArray[i].name = '';
    }
  }

  numericOnly(event): boolean 
  {    
    let pattern = /^([0-9])$/;
    let result = pattern.test(event.key);
    return result;
  }

  loadResultData() {
      this.validateUserInput();
      this.loadCalcResult();
      if(this.validationMessage == "")
      {
        this.ClearInputData();
      }
  }
  
  loadCalcResult() {
    this.inputVals = "";
    for(var i=0;i<this.fieldArray.length;i++)
    {
      this.inputVals += this.fieldArray[i].name + ",";
    }    
    this.displayresultcomponent.objcalcresult.inputvalues = this.inputVals.substring(0,this.inputVals.lastIndexOf(",")); 
    this.displayresultcomponent.objcalcresult.minvalue = 0
    this.displayresultcomponent.objcalcresult.maxvalue = 0
    this.displayresultcomponent.objcalcresult.averagevalue = 0
    this.displayresultcomponent.message = "<div>"+ this.validationMessage+ "</div>"
    this.displayresultcomponent.cleardata = (this.validationMessage != "")
    if(this.validationMessage == "")
    {
      this.calculateAggregateResults(); 
      
    }
  }

  calculateAggregateResults() {
    this.inputvalues.inputvalues = this.inputVals.substring(0,this.inputVals.lastIndexOf(","));

    this.dataservce.GetCalculatedResult(this.inputvalues).subscribe((tempdata) => {
      this.calculatedResult = tempdata;      
      this.displayresultcomponent.objcalcresult.minvalue = this.calculatedResult.minvalue;
      this.displayresultcomponent.objcalcresult.maxvalue = this.calculatedResult.maxvalue;
      this.displayresultcomponent.objcalcresult.averagevalue = this.calculatedResult.averagevalue;
      console.log(this.calculatedResult);  
    }
    )
      , err => {alert("error");
        console.log(err);
      }
  }

  validateUserInput()
  { 
    this.validationMessage = "";
    if (this.fieldArray.length == 0)
    {
      this.validationMessage += "Please enter atleast one user input";
    }
    else 
    {
      for(var i=0;i<this.fieldArray.length;i++)
      {
        if((this.fieldArray[0].name =="")||(this.fieldArray[i].name == undefined ))
        {
          this.validationMessage += "One or more user input(s) is invalid/empty.";
          break;
        }
      }
    }
  }
}
