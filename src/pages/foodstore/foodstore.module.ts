import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodstorePage } from './foodstore';

@NgModule({
  declarations: [
    FoodstorePage,
  ],
  imports: [
    IonicPageModule.forChild(FoodstorePage),
  ],
})
export class FoodstorePageModule {}
