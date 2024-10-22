import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 
    this.authenticated = false;
  }

  public authenticated: boolean = false;

  authenticateUser(username:string, password: string) : boolean {

    if(username === "admin" && password === "admin"){
      this.authenticated = true;
    }else {
      this.authenticated = false;
    }

    return this.authenticated;
  }

  logout() {
    this.authenticated = false;
  }

  isAuthenticated(): boolean{
    return this.authenticated;
  }
}
