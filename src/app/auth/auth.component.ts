import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';
import { AxiosResponse } from 'axios'; 



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  data: string[] = [];

  constructor(private axiosService: AxiosService) {}

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      {}
    ).then(
      (response) =>this.data = response.data
    )
}
}
