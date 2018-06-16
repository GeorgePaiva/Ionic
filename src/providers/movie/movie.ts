import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  
  getLatestMovie(){
    return this.http.get(this.baseApiPath + "/movie/latest?api_key=cac2064f7889f72e307be262a9f4ef61");
  }

}
