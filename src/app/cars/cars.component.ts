import { Component } from '@angular/core';
import { Voiture } from '../voiture/voiture.model';
import { VoitureService } from '../voiture/voiture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent {

  car : Voiture = new Voiture();
  cars : Voiture[] = [];

  constructor(private voitureService: VoitureService, private router: Router){}

  carDetail(id : number | undefined){
    this.router.navigate(['car_details', id]);
      }

 
  
  getVoiture(){
    this.voitureService.getVoitureList().subscribe(data =>{
    this.cars = data;
    })
  }
  ngOnInit(){
    this.getVoiture();
  }
}


