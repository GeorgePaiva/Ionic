import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home'; 

 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from "@angular/http"
import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { TabsPage } from '../pages/tabs/tabs';
import { MovieProviders } from '../providers/movie/movie'; 
import { HttpClientModule } from '@angular/common/http'; 
import { ConfigurationsPageModule } from '../pages/configurations/configurations.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { FilmesDetalhesPage } from '../pages/filmes-detalhes/filmes-detalhes';

  
@NgModule({
  declarations: [
    MyApp, 
    AboutPage, 
    ContactPage, 
    HomePage, 
    TabsPage,
    FilmesDetalhesPage
    ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(MyApp), 
    FeedPageModule, 
    IntroPageModule, 
    HttpModule, 
    HttpClientModule, 
    ConfigurationsPageModule, 
    SobrePageModule, 
    PerfilPageModule,
  ], 
  bootstrap: [IonicApp], 
    entryComponents: 
    [MyApp, 
      AboutPage, 
      ContactPage, 
      HomePage, 
      TabsPage,
      FilmesDetalhesPage
    ],
  providers: [
    StatusBar, 
    SplashScreen, 
    { provide: ErrorHandler, 
      useClass: IonicErrorHandler }, 
      MovieProviders]
})

export class AppModule {}
