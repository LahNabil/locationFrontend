import { Component } from '@angular/core';
import { UserService } from './login.service';
import { Router } from '@angular/router';
import { User } from './login.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  })
export class LoginFormComponent {

  constructor(private userService: UserService, private router: Router){}

	user : User = new User();

	onLoginTab(): void {
		this.active = "login";
	}
  active: string = "login";

	onRegisterTab(): void {
		this.active = "register";
	}

   onSubmitLogin(){
    //  this.userService.onLogin(this.user).subscribe((res:any)=>{
    //   console.log(res)
    //   localStorage.setItem('token',res.token);
    //  });
    //  alert("Connexion réussie!");
  }

   onSubmitRegister(): void {
    this.userService.onRegister(this.user).subscribe((res)=>{
      console.log(res)
      // localStorage.setItem('token', res.token);
    })
  }

}