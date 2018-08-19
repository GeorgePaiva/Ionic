import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProviders } from '../../providers/movie/movie';
import { FilmesDetalhesPage } from '../filmes-detalhes/filmes-detalhes';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProviders
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo: "George Paiva",
    data: "Junho 12, 2018",
    descricao: "Estou criando um app incrivel...",
    qntd_likes: 12,
    qntd_coments: 4,
    time_coment: "11 ago" 
  } 

  public lista_filmes = new Array<any>();
  public page = 1;
  

  public nome_usuario: string = "George Paiva";
  public loader;
  public refresher;
  public isRefresher;
  public infiniteScroll;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProviders: MovieProviders,
    public loadingCtrl: LoadingController
  ) {
  }

  abreCarregando() { 
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes...",
    });
    this.loader.present();
  }
  fechaCarregando(){
    this.loader.dismiss();
  } 

  doRefresh(refresher) {
    this.refresher = refresher;  
    this.isRefresher = true;

    this.carregarFilmes();
  }

  ionViewDidEnter() { 
    this.carregarFilmes(); 
  }
  filmesDetalhes(filme){ 
    console.log(filme);
    this.navCtrl.push(FilmesDetalhesPage, {id: filme.id});
  } 

  doInfinite(infiniteScroll) {
   this.page++;
   this.infiniteScroll = infiniteScroll;
   this.carregarFilmes(true);

   
  }

  carregarFilmes(newpage: boolean = false) {
    this.abreCarregando();
    this.movieProviders.getLatestMovie(this.page).subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
 
        if(newpage){
          this.lista_filmes = this.lista_filmes.concat(objeto_retorno.results);
          console.log(this.page);
          console.log(this.lista_filmes);
          this.infiniteScroll.complete();
        }else{
          this.lista_filmes = objeto_retorno.results;
        }
        

        this.fechaCarregando();
        if(this.isRefresher){
          this.refresher.complete();
          this.isRefresher = false;
        }

      }, error => {
        console.log(error);
        this.fechaCarregando();
      }


    )
  }
}


