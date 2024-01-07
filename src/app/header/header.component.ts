import { Component, Input } from '@angular/core';
import { UserSessionService } from '../login-form/loginSession.service';
import { Router } from '@angular/router';
import { UserSession } from '../login-form/loginSession.model';
import { UserService } from '../login-form/login.service';
import { User } from '../login-form/login.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() pageTitle!: string;
  @Input() logoSrc!: string;

  constructor(private userService: UserService,private userSessionService: UserSessionService, private router: Router){}

	userSession : UserSession | undefined;
  userSessions: UserSession[] = [];

  lastName: String= '';

  user : User | undefined;

  getLastName(){
    this.userService.getLastName().subscribe(data =>{
      this.lastName = data;
      console.log(this.lastName);
    })
  }

  logout(){
    const isConfirmed = window.confirm("voulez vous se deconnecter ?");
    if (isConfirmed) {
    this.userService.logout().subscribe(data =>{
      console.log(data);
      window.location.reload();
    });
  }
  }
  
  

  getUserService(){
    this.userSessionService.getUserSession().subscribe(data =>{
    this.userSessions = data;
    })
  }

  ngOnInit(){
    this.getUserService();
    this.getLastName();
  }

}
