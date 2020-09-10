import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthService {

  constructor() { }

  authenticate(userName, password){
    console.log("before" + this.isUserLoggedIn());
    if(password === "test"){
      sessionStorage.setItem('authenticatedUser', userName);
      console.log("after" + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user== null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }

}
