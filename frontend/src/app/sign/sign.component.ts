import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../templates/users';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {


  private user: User;
  private dataLogin;
  private dataPassword;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userService.castUser.subscribe(user => this.user = user);
  }

  public enterKingdom(login: string, password: string): void {
    this.dataLogin = login;
    this.dataPassword = password;
  
    this.userService.enterLoginPassword(this.dataLogin,this.dataPassword)
      .subscribe(
        result => {
            if (result != null) {
              this.editUser(result);
              console.log(this.user)
              this.router.navigate(['MainPage']);
            } else {
              this.clearUser();
              this.router.navigate(['auth/error']);
          
            }
          },
        error => {alert('An unexpected error occurred while entering an account');}
      );

  }

  private editUser(newUser: User): void {
    this.user = newUser;
    this.userService.editUser(newUser);
  }

  private clearUser(): void {
    this.userService.clearUser();
  }



}
