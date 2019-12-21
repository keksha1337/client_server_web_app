import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../templates/users';
import { UserService } from '../services/users.service';
import {UserValidation} from '../templates/UsersValidation';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.castUser.subscribe(user => this.user = user);
  }

  public user: User;

  private userV: UserValidation = {
    loginValidation: ' ',
    passwordValidation: ' ',
    descriptionValidation: ' '
  };

  private checkValidation(): boolean {

    let isValid = true;


    this.userV.loginValidation = ' ',
    this.userV.passwordValidation = ' ',
    this.userV.descriptionValidation = ' '

    //Логин
    if (this.user.login.length == 0) {
      isValid = false;
      this.userV.loginValidation = 'Значение не должно быть пустым!';
    } else if (this.user.login.length > 20) {
      isValid = false;
      this.userV.loginValidation = 'Поле не должно быть > 20 символов!';
    }

    //Пароль
    if (this.user.password.length == 0) {
      isValid = false;
      this.userV.passwordValidation = 'Значение не должно быть пустым!';
    } else if (this.user.password.length > 20) {
      isValid = false;
      this.userV.passwordValidation = 'Поле не должно быть > 20 символов!';
    }

    return isValid;
  }

  private editUser(newUser: User): void {
    this.user = newUser;
    this.userService.editUser(newUser);
  }
  private clearUser(): void {
    this.userService.clearUser();
  }



  public registerOnSite(): void {
    if (this.checkValidation()) {
      this.userService.register(this.user)
        .subscribe(
          result => {
            if (result != null) {
              this.editUser(result);
              this.router.navigate(['MainPage']);
            } else {
              this.clearUser();
              //this.router.navigate(['auth/autherr']);
              this.router.navigate(['MainPage']);
            }
          },
          error => {alert('An unexpected error occurred while registering and entering an account');}
        );
    }
  }

}
