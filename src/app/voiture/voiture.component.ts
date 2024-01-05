import { Component, inject } from '@angular/core';
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
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';




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
  form !: FormGroup
  formBuilder : FormBuilder = inject(FormBuilder);


  // selectedAssuranceId : any;
  // selectedAgenceId : any;
  // matricule: string = '' ;
  // date: any ;
  // dispo: boolean = true;
  // carburant : string = '';
  // couleur : string = '';
  // marque: string = '';
  // modele: string = '';
  // prix: number = 0;
  // photo: string = '';


  
  closeResult!: string;
  
  // constructor(private axiosService: AxiosService, private modalService: NgbModal){

  // }
  constructor(private assuranceService : AssuranceService, private agenceService: AgenceService,private voitureService: VoitureService, private router: Router, private modalService: NgbModal){

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
    const isConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cette assurance ?");
    if (isConfirmed) {
    this.voitureService.deleteVoiture(id).subscribe(data =>{
      console.log(data);
      window.location.reload();
    });
  }
  }
  ngOnInit(): void {
    this.getVoiture();
    this.getAssurance();
    this.getAgence();
    this.form = this.formBuilder.group({
      matricule : [''],
      date : [''],
      dispo : [''],
      carburant : [''],
      couleur : [''],
      marque: [''],
      modele: [''],
      prix: [''],
      photo: [''],
      assurance: [''],
      agence: ['']
        

    });
    
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
  
    createVoiture(){
  //   if( this.form.valid){
      
  //     let v : Voiture = {
  //       ass: this.assurances.filter(a => a.id == this.form.value["assurance"])[0],
  //       date: new Date(this.from.value['dateDebut']),
  //       date_fin: new Date(this.from.value["dateFin"]),
  //       salle: this.from.value["salle"],
  //       med: this.doctors.filter(d => d.nom === this.from.value["doctor"])[0]
  //     }
  //     console.log(requestBody)
  //     this.voitureService.addVoiture(requestBody).subscribe((response)=>{
  //       console.log(response);
  //     })
  //   }
  }

    // console.log('Adding voiture:', this.matricule, this.marque, this.prix, this.dispo,
    // this.couleur,this.carburant,this.date,this.photo,this.selectedAssuranceId,this.selectedAgenceId
    // );
    // console.log(this.selectedAgenceId);
    
    // this.voiture.agence = this.agences.filter(a => a.id === this.selectedAgenceId)[0];
    // this.voiture.assurance = this.assurances.filter(a => a.id === this.selectedAssuranceId)[0];
    // this.voitureService.addVoiture(this.voiture).subscribe(data=>{
    //   console.log(data);
    //   window.location.reload();
    // });
    // this.voitureService.createVoiture(this.matricule, this.marque, this.prix, this.dispo,
    //   this.couleur,this.carburant,this.date,this.photo,this.selectedAssuranceId,this.selectedAgenceId
    //   ).subscribe(data=>{
    //     console.log(data);
    //     this.voitureService.getVoitureList().subscribe((data)=>{
    //       this.voitures = data;
    //     })
        // window.location.reload();
      // })
  


  // onAgenceChanged(event : any){
  //   this.selectedAgenceId = parseInt(event)
  // }


  // onAssuranceChanged(event : any){
  //     this.selectedAssuranceId =parseInt(event);
  }
  // ngSubmit(){
  //   this.addVoiture();
  // }
    
  //s}
  // onSubmit(){
  //   console.log(this.form.value);
  //   this.addVoiture()
  // }
//}

  

 
  


  
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
// }



