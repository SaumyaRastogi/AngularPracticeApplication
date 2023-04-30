import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';
import { UserService } from './user.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }

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
}
 