import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';
import { Voiture } from './voiture.model';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrl: './voiture.component.scss'
})
export class VoitureComponent {

  data: Voiture[] = [];
  constructor(private axiosService: AxiosService){

  }
  ngOnInit(): void{
    this.axiosService.request(
      "GET",
      "/voitures",
      {}
    ).then(
      (response)=> this.data = response.data
    )
  }

}
