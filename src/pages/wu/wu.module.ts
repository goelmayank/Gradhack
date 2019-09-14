import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WuPage } from './wu';

@NgModule({
  declarations: [
    WuPage,
  ],
  imports: [
    IonicPageModule.forChild(WuPage),
  ],
})
export class WuPageModule {}
