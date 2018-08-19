import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmesDetalhesPage } from './filmes-detalhes';

@NgModule({
  declarations: [
    FilmesDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmesDetalhesPage),
  ],
}) 
export class FilmesDetalhesPageModule {}
