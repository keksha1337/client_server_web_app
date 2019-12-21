import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router) {}
  ngOnInit() {
  }

  public enterPage(): void {
    console.log('2')
    this.router.navigate(['auth/sign_in']);
  }

  public registrationPage(): void {
    this.router.navigate(['auth/registration']);
    //this.router.navigate(['auth/error']);
  }

}
