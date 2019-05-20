import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerorderPage } from './customerorder';

@NgModule({
  declarations: [
    CustomerorderPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerorderPage),
  ],
})
export class CustomerorderPageModule {}
