import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from '../pages/intro/intro';
import { ConfigProvider } from '../providers/config/config';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  rootPage:any;

  constructor(  
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    configProvider: ConfigProvider
  ) {
    platform.ready().then(() => {

     let config = configProvider.getConfigData();
     if (config == null){
       this.rootPage = IntroPage;
       configProvider.setConfigData(false);
     }else{
       this.rootPage = TabsPage;
     }

     console.log(config); 

    statusBar.styleDefault();
    splashScreen.hide();
    });
  }
  
}
