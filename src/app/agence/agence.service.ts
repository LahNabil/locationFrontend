import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agence } from './agence.model';


@Injectable({
  providedIn: 'root'
})
export class AgenceService {
  private baseUrl = "http://localhost:8080/agences";

  constructor(private httpClient : HttpClient) { }

getAgenceList() : Observable<Agence[]>{
    return this.httpClient.get<Agence[]>(`${this.baseUrl}`);
}
getAgenceById(id : number |undefined): Observable<Agence>{
    return this.httpClient.get<Agence>(`${this.baseUrl}/${id}`)
    }
addAgence(agence: Agence): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/add`, agence);
    }
deleteAgence(id:number | undefined) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
    }
updateAgence(id:number, agence : Agence): Observable<Object>{
       return this.httpClient.put(`${this.baseUrl}/edit/${id}`,agence);
}
}