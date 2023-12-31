import { Agence } from "../agence/agence.model";
import { Assurance } from "../assurance/assurance.model";

// voiture.model.ts
export class Voiture {
    id!: number ;
    matricule: string | undefined;
    marque: string | undefined;
    modele: string | undefined;
    prix: number | undefined;
    dispo: boolean | undefined;
    couleur: string | undefined;
    carburant: string | undefined;
    date: Date | undefined;
    photo: string | undefined;
    assurance!: Assurance; // Assuming Assurance is another model
    agence!: Agence ;

}
    // constructor(matricule: string,
    //   marque: string,
    //   modele: string,
    //   prix: number,
    //   dispo: boolean,
    //   couleur: string,
    //   carburant: string,
    //   date: Date,
    //   photo: string,
    //   assuranceId: number, // Assuming Assurance is another model
    //   agenceId: number){
    //     // this.id = id;
    //     this.matricule = matricule;
    //     this.marque = marque;
    //     this.modele = modele;
    //     this.prix = prix;
    //     this.dispo = dispo;
    //     this.couleur = couleur;
    //     this.carburant = carburant;
    //     this.date = date;
    //     this.photo = photo;
    //     this.assuranceId = assuranceId;
    //     this.agenceId = agenceId;


    //   }

    // Assuming Agence is another model
  
    // Instances of related models
    // assurance?: Assurance;
    // agence?: Agence;
  
    // constructor(
    //   id: number,
    //   matricule: string,
    //   marque: string,
    //   modele: string,
    //   prix: number,
    //   dispo: boolean,
    //   couleur: string,
    //   carburant: string,
    //   date: Date,
    //   photo: string,
    //   assuranceId: number,
    //   agenceId: number
    // ) {
    //   this.id = id;
    //   this.matricule = matricule;
    //   this.marque = marque;
    //   this.modele = modele;
    //   this.prix = prix;
    //   this.dispo = dispo;
    //   this.couleur = couleur;
    //   this.carburant = carburant;
    //   this.date = date;
    //   this.photo = photo;
    //   this.assuranceId = assuranceId;
    //   this.agenceId = agenceId;
    // }
  
  
//   // assurance.model.ts
//   export interface Assurance {
//     id: number;
//     // Define other properties of Assurance if needed
//   }
  
//   // agence.model.ts
//   export interface Agence {
//     id: number;
//     // Define other properties of Agence if needed
//   }
  