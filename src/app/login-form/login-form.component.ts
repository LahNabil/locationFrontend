import { Component } from '@angular/core';
import { UserService } from './login.service';
import { Router } from '@angular/router';
import { User } from './login.model';
import { LoginDto } from './loginDto.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  })
export class LoginFormComponent {

  constructor(private userService: UserService, private router: Router){}

	user : User = new User();
  loginDto : LoginDto = new LoginDto()

	onLoginTab(): void {
		this.active = "login";
	}
  active: string = "login";

	onRegisterTab(): void {
		this.active = "register";
	}

   onSubmitLogin(){
       this.userService.onLogin(this.loginDto).subscribe((res:any)=>{
       console.log(res)
       localStorage.setItem('token',res.token);
       
     });
     
     this.router.navigate(['/']).then(()=>{
      window.location.reload();
     })
     
    //  alert("Connexion réussie!");
  }

   onSubmitRegister(): void {
    this.userService.onRegister(this.user).subscribe((res)=>{
      console.log(res)
      // localStorage.setItem('token', res.token);
    })
  }

}