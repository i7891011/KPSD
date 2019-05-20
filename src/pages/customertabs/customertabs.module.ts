import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomertabsPage } from './customertabs';

@NgModule({
  declarations: [
    CustomertabsPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomertabsPage),
  ],
})
export class CustomertabsPageModule {}
