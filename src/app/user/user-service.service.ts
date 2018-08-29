import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceService {

  private isUserLoggedIn;
  constructor() { 
    this.isUserLoggedIn=false;
  }

  setUserLogin(){
    this.isUserLoggedIn=true;
  }

  getUserLogin(){
    return this.isUserLoggedIn;
  }
}
