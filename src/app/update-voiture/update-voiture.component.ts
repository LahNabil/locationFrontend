import { Component } from '@angular/core';
import { Voiture } from '../voiture/voiture.model';
import { VoitureService } from '../voiture/voiture.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styleUrl: './update-voiture.component.scss'
})
export class UpdateVoitureComponent {
  voitures: Voiture[] = [];
  voiture : Voiture = new Voiture();
  id !: number;

  // private getVoiture(){
  //   this.voitureService.getVoitureList().subscribe(data => {
  //   this.voitures = data;
  //   });
  // }
  
  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.voitureService.getVoitureById(this.id).subscribe(data =>{
    this.voiture = data;
  });
  }

  constructor(private voitureService : VoitureService, private route : ActivatedRoute, private router : Router){}
  goToVoitureHome(){
    this.router.navigate(['/admin/voiture'])
  }
  ngSubmit(){
    this.voitureService.updateVoiture(this.id, this.voiture).subscribe(data =>{
      this.goToVoitureHome();
    });
  }

}
