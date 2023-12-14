import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Assurance } from './assurance.model';

@Injectable({
  providedIn: 'root'
})
export class AssuranceService {
  private baseUrl = "http://localhost:8080/assurances";

  constructor(private httpClient : HttpClient) { }

getAssuranceList() : Observable<Assurance[]>{
    return this.httpClient.get<Assurance[]>(`${this.baseUrl}`);
}
getAssuranceById(id : number |undefined): Observable<Assurance>{
    return this.httpClient.get<Assurance>(`${this.baseUrl}/${id}`)
    }
addAssurance(assurance: Assurance): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/add`, assurance);
    }
deleteAssurance(id:number | undefined) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
    }
updateAssurance(id:number, assurance : Assurance): Observable<Object>{
       return this.httpClient.put(`${this.baseUrl}/edit/${id}`,assurance);
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
