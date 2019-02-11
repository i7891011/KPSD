import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyWalletPage } from '../pages/my-wallet/my-wallet';
import { RestaurantsPage } from '../pages/restaurants/restaurants';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { UpdatedriverlocationProvider } from '../providers/updatedriverlocation/updatedriverlocation';

//add firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import *as firebase from 'firebase';

//initialize Firebase
export const config = {
  apiKey: "AIzaSyCyqRve58dSW3dqiaF598-saUA_GbKXNq4",
  authDomain: "kpsdlocate.firebaseapp.com",
  databaseURL: "https://kpsdlocate.firebaseio.com",
  projectId: "kpsdlocate",
  storageBucket: "kpsdlocate.appspot.com",
  messagingSenderId: "758832171241"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    MyWalletPage,
    RestaurantsPage,
    MyProfilePage,
    TabsControllerPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyWalletPage,
    RestaurantsPage,
    MyProfilePage,
    TabsControllerPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UpdatedriverlocationProvider
  ]
})
export class AppModule {}