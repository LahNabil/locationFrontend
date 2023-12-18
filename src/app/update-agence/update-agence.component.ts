import { Component } from '@angular/core';
import { Agence } from '../agence/agence.model';
import { AgenceService } from '../agence/agence.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-agence',
  templateUrl: './update-agence.component.html',
  styleUrl: './update-agence.component.scss'
})
export class UpdateAgenceComponent {
  agences : Agence[] = [];
  agence : Agence = new Agence();
  id!: number;

  constructor(private agenceService : AgenceService, private route : ActivatedRoute, private router : Router){}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.agenceService.getAgenceById(this.id).subscribe(data =>{
    this.agence = data;
  });
  }

  goToAgenceHome(){
    this.router.navigate(['/admin/agence'])
  }

  
  ngSubmit(){

    this.agenceService.updateAgence(this.id, this.agence).subscribe(data =>{
      this.goToAgenceHome();
    });
  }

}
