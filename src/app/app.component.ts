
import { MenuPage } from '../pages/menu/menu';
import { Component, ViewChild } from '@angular/core';
import { AlertController,Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { CustomertabsPage } from '../../src/pages/customertabs/customertabs';
import { TabsControllerPage } from '../../src/pages/tabs-controller/tabs-controller';
//firebase 
import { Push, PushObject, PushOptions } from '@ionic-native/push';
//fcm
import { Firebase } from '@ionic-native/firebase';
import { DriverdialogPage } from '../../src/pages/driverdialog/driverdialog'
//get the user id from auth
import { AuthService, User } from '../../src/config/authservice';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any;
    user = {} as User;
    userInfo: any;
    userType: any;
    
  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private push: Push, private firebase:Firebase,private alertCtrl: AlertController, private userService: AuthService) {
    this.platform.ready().then(() => {
      //push notification
      if (this.platform.is('android')) {
        firebase.getToken().then(token=> {
          console.log("FCM_Token android: "+token);
          localStorage.setItem('FCMToken',token);
          this.initializeUser();
        }).catch(err=> console.log(err));
        firebase.onNotificationOpen().subscribe(data=>{
          if(data.wasTapped){
            console.log("Received in background");
          } else {
            console.log("Received in foreground");
          };
          }, err=> console.log(err));
      } 
    
      if (this.platform.is('ios')) {
        firebase.getToken().then(token=> {
          console.log("FCM_Token iOS: "+token);
          localStorage.setItem('FCMToken',token);
          this.initializeUser();
        }).catch(err=> console.log(err));
        this.firebase.grantPermission();
        firebase.onNotificationOpen().subscribe(data=>{
          if(data.wasTapped){
            console.log("Received in background");
          } else {
            console.log("Received in foreground");
          };
        }, err=> console.log(err));
      }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleLightContent();
      splashScreen.hide();
      // firebase.getToken().then(token => {
      //   console.log(token)
      //    //initialize user
      // }).catch(err=> console.log(err));
      // firebase.onNotificationOpen().subscribe(data=>{
      //   console.log(data);
      //   console.log(data.name)
      // }, err=> console.log(err));
      //this.pushSetup(); 
      //this.getToken();
    });
  }

  async initializeUser(){
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if(this.userInfo!=null){
        await this.syncUserType();
        // this.saveTokenToBackend(this.token); 
        this.userType = JSON.parse(localStorage.getItem('userType'));
        if(this.userType!= null){
          this.setRootPage();
        }else{
          console.log('UserType == null.')
        }
      }else{
        console.log('UserInfo == null.');
        this.navCtrl.setRoot(CustomertabsPage);
      }
  }

  setRootPage(){
    console.log('set root page : '+this.userType);
    if(this.userType == null) {
      this.navCtrl.setRoot(CustomertabsPage);
    }
    else if(this.userType == 'driver') {
      this.navCtrl.setRoot(TabsControllerPage);
    }
    else if(this.userType == 'user') {
      this.navCtrl.setRoot(CustomertabsPage);
    }
    else {
      this.navCtrl.setRoot(CustomertabsPage);
    }
  }
  async syncUserType(){
    //this will update User Type when restart app, incase the User Type changed.
    await this.userService.apiSyncUserType();
  }
  //fcm
  // async getToken() {
  //   if (this.platform.is('android')) {
  //     this.firebase.getToken().then(token=> console.log("FCM_Token: "+token)).catch(err=> console.log(err));
  //   } 
  
  //   if (this.platform.is('ios')) {
  //     this.firebase.getToken().then(token=> console.log("FCM_Token: "+token)).catch(err=> console.log(err));
  //     this.firebase.grantPermission();
  //   } 
  //   //return token;
  //   console.log('This.token in getToken func. '+this.token);
  //   await this.initializeUser();
  //   if(this.userInfo != null){
  //     return this.saveTokenToBackend(this.token);
  //   }
  // }

  // pushSetup(){
  //   const options: PushOptions = {
  //     android: {
  //       senderID: '758832171241'
  //     },
  //     ios: {
  //         alert: 'true',
  //         badge: true,
  //         sound: 'false'
  //     }
  //  }
   
  //   const pushObject: PushObject = this.push.init(options);
   
   
  //   pushObject.on('notification').subscribe((notification: any) => {
  //     console.log('Received a notification', notification)
  //     if (notification.additionalData.foreground) {
  //       // if application open, show popup
  //       this.presentAlertConfirm('You have a new order.',notification.message);
  //     } else {
  //       //if user NOT using app and push notification comes
  //       //TODO: Your logic on click of push notification directly
  //       this.navCtrl.push(DriverdialogPage, { message: notification.message });
  //       console.log('Push notification clicked');
  //     }
  //   });
   
  //   pushObject.on('registration').subscribe((registration: any) => {
  //   });
   
  //   pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
   
  // }

  // async saveTokenToBackend(token) {
  //   let body = { 
  //     id: this.userInfo.id,
  //     fcmToken: token
  //   }
  //   await this.userService.apiPatchUpdateUserFCM('/user',body).then((result)=>{
  //     return result;
  //   })
  // }

  async presentAlertConfirm(title:string,message:any) {
    const alert = await this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'Okay',
          handler: (message) => {
            console.log('Confirm Okay');
            this.navCtrl.push(DriverdialogPage, { message: message });
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();
  }
  
}
