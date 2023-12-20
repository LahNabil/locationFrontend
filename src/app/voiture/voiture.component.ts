import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';
import { Voiture } from './voiture.model';
import { VoitureService } from './voiture.service'
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Assurance } from '../assurance/assurance.model';
import { AssuranceService } from '../assurance/assurance.service';
import { Agence } from '../agence/agence.model';
import { AgenceService } from '../agence/agence.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrl: './voiture.component.scss'
})
export class VoitureComponent {

  voitures: Voiture[] = [];
  voiture : Voiture = new Voiture();
  assurances: Assurance[] = [];
  agences: Agence[] = [];
  
  // closeResult!: string;
  
  // constructor(private axiosService: AxiosService, private modalService: NgbModal){

  // }
  constructor(private agenceService: AgenceService,private assuranceService: AssuranceService,private voitureService: VoitureService, private router: Router, private modalService: NgbModal){

  }
  private getVoiture(){
    this.voitureService.getVoitureList().subscribe(data => {
    this.voitures = data;
    });
  }
  private getAssurance(){
    this.assuranceService.getAssuranceList().subscribe(data => {
    this.assurances = data;
    });
  }
  private getAgence(){
    this.agenceService.getAgenceList().subscribe(data=>{
      this.agences = data;
    })
  }
  deleteVoiture(id : number|undefined){
    this.voitureService.deleteVoiture(id).subscribe(data =>{
      console.log(data);
      window.location.reload();
    });
  }
  ngOnInit(): void {
    this.getVoiture();
    this.getAssurance();
    this.getAgence();
    
  }
  // ngOnInit(): void{
  //   this.axiosService.request(
  //     "GET",
  //     "/voitures",
  //     {}
  //   ).then(
  //     (response)=> this.voitures = response.data
  //   )
  // }
  updateVoiture(id : number | undefined){
    this.router.navigate(['admin','voiture','update', id]);
      }
  
  addVoiture(){
    this.voitureService.addVoiture(this.voiture).subscribe(data=>{
      console.log(data);
      window.location.reload();
    });
  }
  ngSubmit(){
    this.addVoiture();
    
  }

  

 
  


  
// open(content: any) {
//   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
//     this.closeResult = `Closed with: ${result}`;
//   }, (reason) => {
//     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//   });
// }

// private getDismissReason(reason: any): string {
//   if (reason === ModalDismissReasons.ESC) {
//     return 'by pressing ESC';
//   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//     return 'by clicking on a backdrop';
//   } else {
//     return `with: ${reason}`;
//   }
// }
}



