import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Domain } from '../interfaces/domain.interface';
import { Paths } from '../interfaces/paths.interface';
import { AppConstants } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  headers: HttpHeaders = new HttpHeaders();
  info: Domain = {};
  loading = true;
  mainData: Paths = {};

  constructor( public http: HttpClient  ) {
    this.loadInfoMe();
  }

  private loadInfoMe() {
    this.http.get( AppConstants.internalURL ).subscribe((response: Domain) => {
      if ( response != null) {
        this.loading = false;
        this.info = response;
      }
    });
  }

}
