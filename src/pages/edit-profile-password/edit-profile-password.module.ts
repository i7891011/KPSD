import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProfilePasswordPage } from './edit-profile-password';

@NgModule({
  declarations: [
    EditProfilePasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(EditProfilePasswordPage),
  ],
})
export class EditProfilePasswordPageModule {}
