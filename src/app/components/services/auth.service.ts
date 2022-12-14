import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  role!: string;
  login(username: string, pwd: string) {
    if (username.length > 0) {
      if (username == "emp" && pwd == "pwd") {
        this.role = "employe";
        return "employe";
      }
      else if (username == "dir" && pwd == "pwdD") {
        this.role = "directeur";

        return "directeur";
      }

    }
    return "";
  }
  constructor() { }

}
