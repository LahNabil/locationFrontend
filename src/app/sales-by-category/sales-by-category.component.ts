import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { LocationService } from '../location/location.service';
import { VoitureService } from '../voiture/voiture.service';
import { Voiture } from '../voiture/voiture.model';

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrl: './sales-by-category.component.scss'
})
export class SalesByCategoryComponent {

  voitures: Voiture[] = [];
  names!: string[];
  

  constructor(private voitureService : VoitureService) { }
  getVoiture(){
    this.voitureService.getVoitureList().subscribe(data=>{
      this.voitures = data;
    })
  }
  getMarque(): string[] {
    // Ensure that voitures array is not empty before mapping
    if (this.voitures && this.voitures.length > 0) {
      // Extract unique car brands from the list of voitures
      const marques = Array.from(new Set(this.voitures.map(voiture => voiture.marque || '')));
      this.names = marques;
      return marques;
    } else {
      // Handle the case where voitures array is empty
      return [];
    }
  }
  

  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Voitures locations'
    },
    xAxis: {
      categories: this.names,
    },
    yAxis: {
      title: {
        text: 'Location avec voiture '
      }
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Honda',
          y: 41.0,
          color: '#044342',
        },
        {
          name: 'Ford',
          y: 33.8,
          color: '#7e0505',
        },
        {
          name: 'Audi',
          y: 6.5,
          color: '#ed9e20',
        },
        {
          name: 'Chevrolet',
          y: 15.2,
          color: '#6920fb',
        },
        {
          name: 'Hyundai',
          y: 3.5,
          color: '#121212',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

  

  ngOnInit(): void {
    this.getVoiture();
  }


}
