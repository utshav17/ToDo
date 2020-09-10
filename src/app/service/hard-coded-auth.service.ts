import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthService {

  constructor() { }

  authenticate(userName, password){
    if(password === "test"){
      return true;
    }
    return false;
  }
}
