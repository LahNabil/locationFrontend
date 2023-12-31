import { Component } from '@angular/core';
import { User } from '../login-form/login.model';
import { UserService } from '../login-form/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  user: User = new User();
  users: User[] = [];

  constructor(private userService: UserService, private router: Router){}
  getUsers(){
    this.userService.getUserList().subscribe(data => {
    this.users = data;
    });
  }
  ngOnInit(){
    this.getUsers();
  }
  deleteUser(id: number){
    const isConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?");
    if (isConfirmed) {
      this.userService.deleteUser(id).subscribe(data => {
        window.location.reload();
      });
    }
  }

}
