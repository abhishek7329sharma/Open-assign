import { Component, OnInit } from '@angular/core';
interface Months {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-main-right',
  templateUrl: './main-right.component.html',
  styleUrls: ['./main-right.component.css']
})
export class MainRightComponent implements OnInit {
  monthlyIncome: number = 0;
  monthlyExpense: number = 0;
  emiprice: number = 0;
  months: Months[] = [
    {value: '3 Months', viewValue: '3 Months'},
    {value: '6 Months', viewValue: '6 Months'},
    {value: '9 Months', viewValue: '9 Months'},
    {value: '12 Months', viewValue: '12 Months'}
  ];
  constructor() {
    
   }
  ngOnInit(): void {
  }
  onChangeIncome(event:any){
    this.monthlyIncome = event.value
  }
  onChangeExpense(event:any){
    this.monthlyExpense = event.value
  }
  emiOptional(event:any){
this.emiprice = event.value
  }
}
