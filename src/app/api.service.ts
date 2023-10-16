import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Timeseries } from './timeseries.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  insertTimeseries(timeseries:Timeseries){
 return this.http.post<{message: string}>('http://localhost:3000/timeseries',timeseries);
  }
  fetchTimeseries(){
  return this.http.get<{message:string}>('http://localhost:3000/timeseries');
  }
}
