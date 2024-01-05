import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Voiture } from './voiture.model';
import { Assurance } from '../assurance/assurance.model';
import { Agence } from '../agence/agence.model';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private httpClient : HttpClient) { }

  private baseUrl = "http://localhost:8080/voitures";
  

  

  
    
  getVoitureById(id : number |undefined): Observable<Voiture>{
    return this.httpClient.get<Voiture>(`${this.baseUrl}/${id}`)
    }

  addVoiture(voiture: Voiture): Observable<Object>{
      return this.httpClient.post(`${this.baseUrl}/add`, voiture);
      }
  createVoiture(vmatricule: string,
     vmarque: string,
     vprix: number,
     vdispo: boolean,
     vcouleur: string,
     vcarburant: string,
     vdate: Date,
     vphoto: string,
     vassuranceId: any,
     vagenceId: any
      ): Observable<Object> {
        const body = { matricule: vmatricule, marque: vmarque, prix: vprix, dispo: vdispo,
        couleur: vcouleur, carburant: vcarburant, date: vdate, photo: vphoto, assuranceId:vassuranceId,
        agenceId:  vagenceId 
        };
        return this.httpClient.post(`${this.baseUrl}/add`, body);
      }    
  

  getVoitureList() : Observable<Voiture[]>{
    return this.httpClient.get<Voiture[]>(`${this.baseUrl}`);
}
  deleteVoiture(id:number | undefined) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
    }
  updateVoiture(id:number, voiture : Voiture): Observable<Object>{
       return this.httpClient.put(`${this.baseUrl}/edit/${id}`,voiture);
}
  affecterVoitureAssurance(idV : number | undefined, idA :number | undefined): Observable<Object>{
  return this.httpClient.post(`${this.baseUrl}/affecterAss/${idV}/${idA}`, {});
}


// getCategoriesList() : Observable<Categorie[]>{
//   return this.httpClient.get<Categorie[]>(`${this.baseUrl}`);
// }

// createCategorie(categorie : Categorie): Observable<Object>{
// return this.httpClient.post(`${this.baseUrl}`, categorie);
// }

// deleteCategorie(id:number | undefined) : Observable<Object>{
// return this.httpClient.delete(`${this.baseUrl}/id/${id}`);
// }

// updateCategorie(id:number|undefined, categorie : Categorie): Observable<Object>{
// return this.httpClient.put(`${this.baseUrl}/id/${id}`,categorie);

// }

}
