import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent  {
  email = '';
  password = '';

  constructor(private authService: AuthService) {
    this.authService.getUserCredentials().subscribe(({ email, password }) => {
      this.email = email;
      this.password = password;
    });
  }
}
