import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/ 
@Injectable()   
export class MovieProviders { 
  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MovieProviders Provider');
  }

  
  getLatestMovie(page = 1) {
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=cac2064f7889f72e307be262a9f4ef61&language=pt-BR`);
  }

  getMovieDetails(filmeid) {
    return this.http.get(this.baseApiPath + `/movie/${filmeid}?api_key=`+"cac2064f7889f72e307be262a9f4ef61&language=pt-BR");
  }
  

}


