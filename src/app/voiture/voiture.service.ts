import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voiture } from './voiture.model';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  private baseUrl = "http://localhost:8080/voitures";

  constructor(private httpClient : HttpClient) { }

addVoiture(voiture: Voiture): Observable<Object>{
return this.httpClient.post(`${this.baseUrl}/add`, voiture);
}
getVoitureById(id : number |undefined): Observable<Voiture>{
  return this.httpClient.get<Voiture>(`${this.baseUrl}/id/${id}`)
  }

getVoitureList() : Observable<Voiture[]>{
    return this.httpClient.get<Voiture[]>(`${this.baseUrl}`);
}
deleteVoiture(id:number | undefined) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
    }
updateVoiture(id:number, voiture : Voiture): Observable<Object>{
       return this.httpClient.put(`${this.baseUrl}/id/${id}`,voiture);
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
