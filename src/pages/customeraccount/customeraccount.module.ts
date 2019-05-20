import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomeraccountPage } from './customeraccount';

@NgModule({
  declarations: [
    CustomeraccountPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomeraccountPage),
  ],
})
export class CustomeraccountPageModule {}
