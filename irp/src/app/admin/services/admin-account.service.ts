import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAccountService {

  constructor() { }

  public isAdminLoggedIn() {
    var user = sessionStorage.getItem('adminId')
    return !(user === null)
  }


}
