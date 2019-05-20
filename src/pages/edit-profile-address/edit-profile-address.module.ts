import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProfileAddressPage } from './edit-profile-address';

@NgModule({
  declarations: [
    EditProfileAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(EditProfileAddressPage),
  ],
})
export class EditProfileAddressPageModule {}
