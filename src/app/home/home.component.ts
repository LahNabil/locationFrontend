import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Voiture } from '../voiture/voiture.model';
import { VoitureService } from '../voiture/voiture.service';

import SwiperCore, { Navigation, Pagination} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

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
