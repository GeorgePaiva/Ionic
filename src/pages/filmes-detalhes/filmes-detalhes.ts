import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProviders } from '../../providers/movie/movie';



@IonicPage()
@Component({
  selector: 'page-filmes-detalhes',
  templateUrl: 'filmes-detalhes.html',
  providers: [MovieProviders]  
})
export class FilmesDetalhesPage {
  public filmes;
  public filmeid;
  
 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public movieProviders: MovieProviders
  
  ) {
  }
 
  ionViewDidLoad() {
   this.filmeid = this.navParams.get("id");
   this.movieProviders.getMovieDetails(this.filmeid).subscribe(data=>{
     let retorno = (data as any)._body;
     this.filmes = JSON.parse(retorno);
     console.log (this.filmes);
   }, error=> {
     console.log(error);
 
   })
  }

}
