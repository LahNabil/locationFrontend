import { Component } from '@angular/core';
import { LocationService } from '../location/location.service';

@Component({
  selector: 'app-topwidgets',
  templateUrl: './topwidgets.component.html',
  styleUrl: './topwidgets.component.scss'
})
export class TopwidgetsComponent {

  sumV!: number;
  sumU!: number;
  sumL!: number;

  constructor(private locationService: LocationService){}
  ngOnInit(){
    this.getSumVoiture();
    this.getSumUsers();
    this.getSumLocations();
  }
  getSumVoiture(){
    this.locationService.getSumVoiture().subscribe(data =>{
      this.sumV = data;
    })
  }
  getSumUsers(){
    this.locationService.getSumUsers().subscribe(data =>{
      this.sumU = data;
    })
  }
  getSumLocations(){
    this.locationService.getSumLocations().subscribe(data =>{
      this.sumL = data;
    })
  }

}
