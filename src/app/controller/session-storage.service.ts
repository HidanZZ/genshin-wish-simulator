import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {


  private KEY = 'user-data';


  constructor() {
  }


  public saveData(data) {
    window.sessionStorage.removeItem(this.KEY);
    window.sessionStorage.setItem(this.KEY, JSON.stringify(data));
  }

  public getData() {
    return JSON.parse(sessionStorage.getItem(this.KEY));
  }


}
