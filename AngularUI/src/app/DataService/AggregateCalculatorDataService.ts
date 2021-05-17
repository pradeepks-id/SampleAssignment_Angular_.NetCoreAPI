import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalculatedResult } from 'src/Models/CalculatedResult'
import { InputValues } from 'src/Models/InputValues'
import { ROOT_URL } from 'src/Models/Config'
import { Observable } from 'rxjs';
@Injectable()
export class AggregateCalculatorDataService {
  results: Observable<CalculatedResult>;  
  constructor(private http: HttpClient) {

  }

  GetCalculatedResult(arrInp: InputValues) {

    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      InputValues: arrInp.inputvalues
    }
    console.log(ROOT_URL);

    return this.http.post<CalculatedResult>(ROOT_URL + 'home/calculate', body, { headers, withCredentials: true });

  }
}




