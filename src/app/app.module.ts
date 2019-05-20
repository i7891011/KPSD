import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//---Plugin---//
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';

//---Service---//
import { UpdatedriverlocationProvider } from '../providers/updatedriverlocation/updatedriverlocation';
import { CheckPasswordDirective } from '../config/validators';
import { AuthService, CartService } from '../config/authservice';

//---Firebase---//
import { Push } from '@ionic-native/push'
import { Firebase } from '@ionic-native/firebase';
import { DriverdialogPage } from '../pages/driverdialog/driverdialog';

//---Driver---//
import { MyWalletPage } from '../pages/my-wallet/my-wallet';
import { RestaurantsPage } from '../pages/restaurants/restaurants';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';

//---Customer---//
import { HomePage } from '../pages/home/home';
import { BasketPage } from '../pages/basket/basket';
import { CustomeraccountPage } from '../pages/customeraccount/customeraccount';
import { CustomeraddressPage } from '../pages/customeraddress/customeraddress';
import { CustomeravatarPage } from '../pages/customeravatar/customeravatar';
import { CustomerorderPage } from '../pages/customerorder/customerorder';
import { CustomerprofilePage } from '../pages/customerprofile/customerprofile';
import { CustomertabsPage } from '../pages/customertabs/customertabs';
import { DriverregisterPage } from '../pages/driverregister/driverregister';
import { EditProfileAddressPage } from '../pages/edit-profile-address/edit-profile-address';
import { EditProfileNamePage } from '../pages/edit-profile-name/edit-profile-name';
import { EditProfilePasswordPage } from '../pages/edit-profile-password/edit-profile-password';
import { FoodAddRemovePage } from '../pages/food-add-remove/food-add-remove';
import { FoodcenterPage } from '../pages/foodcenter/foodcenter';
import { FoodstorePage } from '../pages/foodstore/foodstore';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { HelpcenterPage } from '../pages/helpcenter/helpcenter';
import { HistoryPage } from '../pages/history/history';
import { HistoryDetailPage } from '../pages/history-detail/history-detail';
import { LegalntermPage } from '../pages/legalnterm/legalnterm';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { MenuPage } from '../pages/menu/menu';
import { RatedriverPage } from '../pages/ratedriver/ratedriver';
import { RaterestaurantPage } from '../pages/raterestaurant/raterestaurant';
import { RegisterPage } from '../pages/register/register';

@NgModule({
  declarations: [
    MyApp,
    MyWalletPage,
    RestaurantsPage,
    MyProfilePage,
    TabsControllerPage,
    DriverdialogPage,
    HomePage,
    BasketPage,
    CustomeraccountPage,
    CustomeraddressPage,
    CustomeravatarPage,
    CustomerorderPage,
    CustomerprofilePage,
    CustomertabsPage,
    DriverregisterPage,
    EditProfileAddressPage,
    EditProfileNamePage,
    EditProfilePasswordPage,
    FoodAddRemovePage,
    FoodcenterPage,
    FoodstorePage,
    ForgotpasswordPage,
    HelpcenterPage,
    HistoryPage,
    HistoryDetailPage,
    LegalntermPage,
    LoginPage,
    MainPage,
    MenuPage,
    RatedriverPage,
    RaterestaurantPage,
    RegisterPage,
    CheckPasswordDirective,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp, { scrollPadding: false})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyWalletPage,
    RestaurantsPage,
    MyProfilePage,
    TabsControllerPage,
    DriverdialogPage,
    HomePage,
    BasketPage,
    CustomeraccountPage,
    CustomeraddressPage,
    CustomeravatarPage,
    CustomerorderPage,
    CustomerprofilePage,
    CustomertabsPage,
    DriverregisterPage,
    EditProfileAddressPage,
    EditProfileNamePage,
    EditProfilePasswordPage,
    FoodAddRemovePage,
    FoodcenterPage,
    FoodstorePage,
    ForgotpasswordPage,
    HelpcenterPage,
    HistoryPage,
    HistoryDetailPage,
    LegalntermPage,
    LoginPage,
    MainPage,
    MenuPage,
    RatedriverPage,
    RaterestaurantPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Push,
    Firebase,
    AuthService,
    CartService,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UpdatedriverlocationProvider
  ]
})
export class AppModule {}