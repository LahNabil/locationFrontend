import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Location } from './location.model';
import { Agence } from '../agence/agence.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient : HttpClient) { }

  private baseUrl = "http://localhost:8080/location";
  private baseUrl1 = "http://localhost:8080";
  private baseUrl2 = "http://localhost:8080/voitures";

  

  addLocation(location: Location): Observable<Object>{
      return this.httpClient.post(`${this.baseUrl}/add`, location);
      }
  
  getLocationList() : Observable<Location[]>{
    return this.httpClient.get<Location[]>(`${this.baseUrl}/`);
}
//   deleteVoiture(id:number | undefined) : Observable<Object>{
//     return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
//     }
//   updateVoiture(id:number, voiture : Voiture): Observable<Object>{
//        return this.httpClient.put(`${this.baseUrl}/edit/${id}`,voiture);
// }
  


}
