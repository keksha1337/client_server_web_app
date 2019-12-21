import {Injectable, Input} from '@angular/core';
import { User } from '../templates/users';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userInit: User = {
    userId: 0,
    login: '',
    password: '',
    description: '',
    photo_url: '',
    who_like: [],
    whom_like: [],
  };

  private user = new BehaviorSubject<User>(this.userInit);
  castUser = this.user.asObservable();

  private urlBase: string = 'http://localhost:5000';

  private urlEnter: string = '/user?login=';

  private urlRegister: string = '/register?';

  public enterLoginPassword(dataLogin, dataPassword): Observable<User> {
    return this.http.get<User>((this.urlBase + this.urlEnter + dataLogin + '&password=' + dataPassword));

  }

  public register(newUser: User): Observable<User> {
    return this.http.post<User>((this.urlBase + this.urlRegister  ), newUser);
  }

  //public pushMemes():Observable<User>{

    //return this.http.get<User>()
  //}

  
  public editUser(newUser: User): void {
    this.user.next(newUser);
  }



  public clearUser(): void {
  let userZero: User = {
    userId: 0,
    login: '',
    password: '',
    description: '',
    photo_url: '',
    who_like: [],
    whom_like: [],
    };
    this.editUser(userZero);
  }

  constructor(private http: HttpClient) { }



}