import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';
import { UserService } from './user.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;
  public auth: BehaviorSubject<any>;
  constructor(private userService: UserService) {
    this.currentUserSubject = new BehaviorSubject<User | null>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.auth = new BehaviorSubject<any>(null);
  }

  async authenticateUser(email: string, password: string): Promise<boolean> {
    const userDetails = this.userService.getUserDetails();
    if (!userDetails) {
      return false;
    }

    const match = await bcrypt.compare(password, userDetails.password);
    return match && userDetails.email === email;
  }
  private userCredentials = new BehaviorSubject<{ email: string, password: string }>({ email: '', password: '' });

  setUserCredentials(email: string, password: string) {
    this.userCredentials.next({ email, password });
  }

  getUserCredentials() {
    return this.userCredentials.asObservable();
  }
  public get currentUserValue(): User {
    return <User>(this.currentUserSubject.value);
  }

}
