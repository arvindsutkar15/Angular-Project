import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
loginUser:boolean = false;

  constructor() {

   }

   isUserLoggedIn(){
    //real time will be differrnt logic is here..

    return this.loginUser=true;
   }
}
