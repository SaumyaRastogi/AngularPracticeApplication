import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm !: FormGroup;
  userType: string = 'user';
  loggedIn = false;
  loginDetails: any;

  constructor(private fb: FormBuilder, private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  login() {
    this.loginDetails = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value
    };
  }


  onSubmit() {
    const { email, password } = this.loginForm.value;
    this.authService.setUserCredentials(email, password);

    const userDetails = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value
    };

    // Store the user details in local storage
    this.userService.setUserDetails(userDetails);
  }
}
