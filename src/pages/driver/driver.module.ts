import { NgModule } from '@angular/core';
import { DriverPage } from './driver';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [DriverPage],
  imports: [IonicPageModule.forChild(DriverPage)],
  entryComponents: [DriverPage]
})
export class DriverPageModule { }