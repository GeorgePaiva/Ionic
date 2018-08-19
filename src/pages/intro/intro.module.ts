import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroPage } from './intro';

@NgModule({
  declarations: [
    IntroPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroPage),
  ],
})
export class IntroPageModule {
  public static HttpModule: any;
}
