import { Component } from '@angular/core';
import { Voiture } from '../voiture/voiture.model';
import { VoitureService } from '../voiture/voiture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Assurance } from '../assurance/assurance.model';
import { AssuranceService } from '../assurance/assurance.service';
import { Agence } from '../agence/agence.model';
import { AgenceService } from '../agence/agence.service';

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styleUrl: './update-voiture.component.scss'
})
export class UpdateVoitureComponent {
  voitures: Voiture[] = [];
  voiture : Voiture = new Voiture();
  assurances: Assurance[] = [];
  agences: Agence[] = [];
  id !: number;

  private getAssurances(){
    this.assuranceService.getAssuranceList().subscribe(data =>{
      this.assurances = data;
    })
  }
  private getAgences(){
    this.agenceService.getAgenceList().subscribe(data =>{
      this.agences = data;
    })
  }

  
  ngOnInit(): void {
    this.getAgences();
    this.getAssurances();
    this.id = this.route.snapshot.params['id'];
    this.voitureService.getVoitureById(this.id).subscribe(data =>{
    this.voiture = data;
  });
  }

  constructor(private agenceService : AgenceService , private assuranceService: AssuranceService ,private voitureService : VoitureService, private route : ActivatedRoute, private router : Router){}
  goToVoitureHome(){
    this.router.navigate(['/admin/voiture'])
  }
  ngSubmit(){
    this.voitureService.updateVoiture(this.id, this.voiture).subscribe(data =>{
      this.goToVoitureHome();
    });
  }

}
