import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverregisterPage } from './driverregister';

@NgModule({
  declarations: [
    DriverregisterPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverregisterPage),
  ],
})
export class DriverregisterPageModule {}
