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
  private baseUrl1 = "http://localhost:8080/assurances";
  private baseUrl2 = "http://localhost:8080/agences";

  

  getAssuranceById(id : number |undefined): Observable<Assurance>{
    return this.httpClient.get<Assurance>(`${this.baseUrl1}/${id}`)
    }
  getAgenceById(id : number |undefined): Observable<Agence>{
      return this.httpClient.get<Agence>(`${this.baseUrl2}/${id}`)
      }
  getVoitureById(id : number |undefined): Observable<Voiture>{
      return this.httpClient.get<Voiture>(`${this.baseUrl}/${id}`)
      }

  addVoiture(voiture: Voiture): Observable<Object>{
      return this.httpClient.post(`${this.baseUrl}/add`, voiture);
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
