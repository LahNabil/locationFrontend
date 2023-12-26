import { Component } from '@angular/core';
import { LocationService } from './location.service';
import { Router } from '@angular/router';
import { Location } from './location.model'; 

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {

  location: Location = new Location();
  locations: Location[] = [];
  constructor(private locationService: LocationService, private router: Router){}
  
  getLocation(){
    this.locationService.getLocationList().subscribe(data =>{
    this.locations = data;
    })
  }
  ngOnInit(){
    this.getLocation();
  }
}
