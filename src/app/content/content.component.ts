import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
	componentToShow: string = "welcome";

	constructor(private axiosService: AxiosService) { }

  

	showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;
  }

	onLogin(input: any): void {
		this.axiosService.request(
		    "POST",
		    "/login",
		    {
		        login: input.login,
		        password: input.password
		    }
        )

	}

	onRegister(input: any): void {
		this.axiosService.request(
		    "POST",
		    "/register",
		    {
		        firstName: input.firstName,
		        lastName: input.lastName,
		        login: input.login,
		        password: input.password
		    }
        )
	}

}