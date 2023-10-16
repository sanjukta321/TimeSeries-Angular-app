import { Component, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { Timeseries } from '../timeseries.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timeseries',
  templateUrl: './timeseries.component.html',
  styleUrls: ['./timeseries.component.css']
})
export class TimeseriesComponent implements OnDestroy {
  amount1: number = 0;
  amount2: number = 0;
  amount3: number = 0;
  amount4: number = 0;
  amount5: number = 0;
  amount6: number = 0;
  amount7: number = 0;
  amount8: number = 0;
  amount9: number = 0;
  amount10: number = 0;
  subscription: Subscription  = new Subscription();
  constructor(private apiservice:ApiService){
  
    
  }
  
  
  onSubmit(){
   const timeseries = new Timeseries();
   timeseries.amount1 = this.amount1;
   timeseries.amount2 = this.amount2;
   timeseries.amount3 = this.amount3;
   timeseries.amount4 = this.amount4;
   timeseries.amount5 = this.amount5;
   timeseries.amount6 = this.amount6;
   timeseries.amount7 = this.amount7;
   timeseries.amount8 = this.amount8;
   timeseries.amount9 = this.amount9;
   timeseries.amount10 = this.amount10;
    this.subscription = this.apiservice.insertTimeseries(timeseries).subscribe(data=>{
    alert(data.message)
    })

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
