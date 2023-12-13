import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';
import { Voiture } from './voiture.model';
import { VoitureService } from './voiture.service'
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrl: './voiture.component.scss'
})
export class VoitureComponent {

  voitures: Voiture[] = [];
  voiture : Voiture = new Voiture();
  
  // closeResult!: string;
  // constructor(private axiosService: AxiosService, private modalService: NgbModal){

  // }
  constructor(private voitureService: VoitureService, private router: Router, private modalService: NgbModal){

  }
  private getVoiture(){
    this.voitureService.getVoitureList().subscribe(data => {
    this.voitures = data;
    });
  }
  deleteVoiture(id : number|undefined){
    this.voitureService.deleteVoiture(id).subscribe(data =>{
      console.log(data);
      window.location.reload();
    });
  }
  ngOnInit(): void {
    this.getVoiture();
    
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
}
  

  // addVoiture(newVoiture: Voiture): void {
  //   this.axiosService.request(
  //     'POST',
  //     '/voitures/add',
  //     { newVoiture}
  //   ).then(
  //     (response) => {this.data.push(response.data);
  //     },
  //     (error) => {
  //       // Gérez l'erreur, par exemple, affichez un message d'erreur
  //       console.error('Erreur lors de l\'ajout de la voiture :', error);
  //     }
  //   );
  // }

  // deleteVoiture(id: number): void {
  //   const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer cette voiture ?');
  //   if(confirmation){
  //   this.axiosService.request(
  //     'DELETE',
  //     `/voitures/delete/${id}`,
  //     {}
  //   ).then(
  //     () => {
  //       console.log(`Voiture avec l'ID ${id} supprimée avec succès.`);
  //       window.location.reload();
  //     },
  //     (error)=>{
  //       console.log('Erreur');
  //     }
  //   );
  //   } else {
  //     console.log('suppression annulée');
  //   }
  // }
  


  
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


