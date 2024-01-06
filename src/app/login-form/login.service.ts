import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './login.model';
import { LoginDto } from './loginDto.model';

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    private baseUrl = "http://localhost:8080";
    constructor(private httpClient : HttpClient) { }

    getUserList() : Observable<User[]>{
      return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }
  getLastName(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/username`, { responseType: 'text' });
  }

  deleteUser(id:number | undefined) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
    }

    getAuthToken(): string | null {
        return window.localStorage.getItem("auth_token");
      }
      
      setAuthToken(token: string | null): void{
        if(token !== null){
          window.localStorage.setItem("auth_token", token);
        } else {
          window.localStorage.removeItem("auth_token");
        }
      }
      // addAssurance(assurance: Assurance): Observable<Object>{
        //     return this.httpClient.post(`${this.baseUrl}/add`, assurance);
        //     }

    onLogin(user: LoginDto): Observable<Object> {
        return this.httpClient.post(`${this.baseUrl}/login`, user);
    }
    onRegister(user: User): Observable<Object>{
      return this.httpClient.post(`${this.baseUrl}/register`, user)
    }

	// onRegister(input: any): void {
	// 	this.axiosService.request(
	// 	    "POST",
	// 	    "/register",
	// 	    {
	// 	        firstName: input.firstName,
	// 	        lastName: input.lastName,
	// 	        login: input.login,
	// 	        password: input.password
	// 	    }
    //     ).then(response => {
    //       this.axiosService.setAuthToken(response.data.token);
    //       this.componentToShow = "messages";
    //     });
	// }
    // addAssurance(assurance: Assurance): Observable<Object>{
    //     return this.httpClient.post(`${this.baseUrl}/add`, assurance);
    //     }
    // deleteAssurance(id:number | undefined) : Observable<Object>{
    //     return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
    //     }
    // updateAssurance(id:number, assurance : Assurance): Observable<Object>{
    //        return this.httpClient.put(`${this.baseUrl}/edit/${id}`,assurance);
    // }
  }