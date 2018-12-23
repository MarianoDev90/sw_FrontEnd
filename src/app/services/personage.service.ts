import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Personage } from '../interfaces/personage.interface';
import { AppConstants } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class PersonageService {
  headers: HttpHeaders = new HttpHeaders();

  constructor(public http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
  }

  public loadInfo(id: number) {
    this.http.get( AppConstants.urlCharacters + id , {headers: this.headers}).subscribe((response: Personage) => {
      console.log(response);
    });
  }
}
