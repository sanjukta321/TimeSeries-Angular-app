import { Component,OnInit,ViewChild } from '@angular/core';
import{Chart} from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'TimeseriesApplication';
  constructor(){

  }
  ngOnInit() {}
    
  canvas:any;
  ctx:any;
  @ViewChild('mychart')mychart:any;
  ngAfterViewInit(){
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    new Chart(this.ctx, {
     type:'line',
     data:{
      datasets:[{
        label:'Current Value',
        data:[0,20,40,50],
        backgroundColor:"rgb(115 185 243 / 65%)",
        borderColor:"#007ee7",
        fill:true,
          
        
      }],
      labels:['january 2023','february 2023','march 2023','april 2023','may 2023','june 2023','july 2023',
                'august 2023','september 2023','october 2023','november 2023','december 2023']
     },
    });
  }
}
