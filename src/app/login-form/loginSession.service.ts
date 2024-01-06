import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserSession } from './loginSession.model';


@Injectable({
    providedIn: 'root'
  })
  export class UserSessionService {
    private baseUrl = "http://localhost:8080/session";
    constructor(private httpClient : HttpClient) { }

    getUserSession() : Observable<UserSession[]>{
      return this.httpClient.get<UserSession[]>(`${this.baseUrl}/userId`);
  }

//   deleteUser(id:number | undefined) : Observable<Object>{
//     return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
//     }

}