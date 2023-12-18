import { Component } from '@angular/core';
import { Agence } from './agence.model';
import { AgenceService } from './agence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrl: './agence.component.scss'
})
export class AgenceComponent {

  agences : Agence[] = [];
  agence: Agence = new Agence();
  
  constructor(private agenceService: AgenceService, private router: Router){}
  getAgence(){
    this.agenceService.getAgenceList().subscribe(data => {
    this.agences = data;
    });
  }
  ngOnInit(){
    this.getAgence();
  }
  addAgence(){
    this.agenceService.addAgence(this.agence).subscribe(data=>{
      console.log(data);
      window.location.reload();
    });
  }
  updateAgence(id : number | undefined){
    this.router.navigate(['admin','agence','update', id]);
      }
  deleteAgence(id: number){
    const isConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cette Agence?");
    if (isConfirmed) {
      this.agenceService.deleteAgence(id).subscribe(data => {
        window.location.reload();
      });
    }
  }
  
  ngSubmit(){
    this.addAgence();
  }

}
