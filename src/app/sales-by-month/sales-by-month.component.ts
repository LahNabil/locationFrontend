import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrl: './sales-by-month.component.scss'
})
export class SalesByMonthComponent {

  chart = new Chart({
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'Location Par Mois'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Number of rental'
      }
    },
    series: [
      {
        name: "Location",
        type: "line",
        color: '#044342',
        data: [10, 15, 20, 30, 100, 215, 252, 265, 233, 100, 50, 20]
      }
      
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }
}
