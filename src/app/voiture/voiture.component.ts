import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';
import { Voiture } from './voiture.model';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrl: './voiture.component.scss'
})
export class VoitureComponent {

  data: Voiture[] = [];
  newCar!: Voiture;
  
  closeResult!: string;
  constructor(private axiosService: AxiosService, private modalService: NgbModal){

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
  onSubmit(f: NgForm) {
    if(f.valid){
      this.addVoiture(f.value);
      f.resetForm();
      
    }
    // this.httpClient.post(url, f.value)
    //   .subscribe((result) => {
    //     this.ngOnInit(); //reload the table
    //   });
    // this.modalService.dismissAll(); //dismiss the modal
  }

  deleteVoiture(id: number): void {
    const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer cette voiture ?');
    if(confirmation){
    this.axiosService.request(
      'DELETE',
      `/voitures/delete/${id}`,
      {}
    ).then(
      () => {
        console.log(`Voiture avec l'ID ${id} supprimée avec succès.`);
        window.location.reload();
      },
      (error)=>{
        console.log('Erreur');
      }
    );
    } else {
      console.log('suppression annulée');
    }
  }
  


  addVoiture(newVoiture: Voiture): void {
    this.axiosService.request(
      'POST',
      '/voitures/add',
      { data: newVoiture}
    ).then(
      (response) => {this.data.push(response.data);
      },
      (error) => {
        // Gérez l'erreur, par exemple, affichez un message d'erreur
        console.error('Erreur lors de l\'ajout de la voiture :', error);
      }
    );
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
