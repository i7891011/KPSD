import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProfileNamePage } from './edit-profile-name';

@NgModule({
  declarations: [
    EditProfileNamePage,
  ],
  imports: [
    IonicPageModule.forChild(EditProfileNamePage),
  ],
})
export class EditProfileNamePageModule {}
