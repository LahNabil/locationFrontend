import { Component } from '@angular/core';
import { Voiture } from '../voiture/voiture.model';
import { VoitureService } from '../voiture/voiture.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent {

  car : Voiture = new Voiture();
  cars : Voiture[] = [];

  constructor(private voitureService: VoitureService){}

 
  
  getVoiture(){
    this.voitureService.getVoitureList().subscribe(data =>{
    this.cars = data;
    })
  }
  ngOnInit(){
    this.getVoiture();
  }
}


