import { Component } from '@angular/core';
import { Voiture } from '../voiture/voiture.model';
import { VoitureService } from '../voiture/voiture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  car : Voiture = new Voiture();
  cars : Voiture[] = [];

  constructor(private voitureService: VoitureService, private router: Router){}
  
  getVoiture(){
    this.voitureService.getVoitureList().subscribe(data =>{
    this.cars = data;
    })
  }
  ngOnInit(){
    this.getVoiture();
  }
}
