import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly USER_STORAGE_KEY = 'userDetails';

  constructor() { }

  // Store the user details in local storage
  async setUserDetails(userDetails: any) {
    const hashedPassword = await bcrypt.hash(userDetails.password, 10);
    const userDetailsHashed = { ...userDetails, password: hashedPassword };
    localStorage.setItem(this.USER_STORAGE_KEY, JSON.stringify(userDetailsHashed));
  }

  // Get the user details from local storage
  getUserDetails() {
    return JSON.parse(localStorage.getItem(this.USER_STORAGE_KEY) || '{}');
  }

  // Remove the user details from local storage
  removeUserDetails() {
    localStorage.removeItem(this.USER_STORAGE_KEY);
  }

}
