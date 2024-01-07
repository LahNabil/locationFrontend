import { Component } from '@angular/core';
import { VoitureService } from '../voiture/voiture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from '../voiture/voiture.model';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.scss'
})
export class CarDetailsComponent {
  voitures: Voiture[] = [];
  voiture : Voiture = new Voiture();
  id !: number;

  constructor(private voitureService : VoitureService, private route : ActivatedRoute, private router : Router){}
  goToVoitureHome(){
    this.router.navigate(['/'])
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.voitureService.getVoitureById(this.id).subscribe(data =>{
    this.voiture = data;
  });
  }
}
