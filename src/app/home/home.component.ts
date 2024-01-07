import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Voiture } from '../voiture/voiture.model';
import { VoitureService } from '../voiture/voiture.service';


import SwiperCore, { Navigation, Pagination} from 'swiper';
import { Router } from '@angular/router';

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

  constructor(private voitureService: VoitureService, private router: Router){}

 
  
  getVoiture(){
    this.voitureService.getVoitureList().subscribe(data =>{
    this.cars = data;
    })
  }
  carDetail(id : number | undefined){
    this.router.navigate(['car_details', id]);
      }
      
  ngOnInit(){
    this.getVoiture();
  }
}
