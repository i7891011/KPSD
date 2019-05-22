import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController, Modal } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { AuthService } from '../../config/authservice';
/* to get currentlocation */
import { Geolocation } from '@ionic-native/geolocation';

//for create dialog
import { ModalController,ModalOptions } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'page-driver',
  templateUrl: 'driver.html'
})
export class DriverPage {
  arrData =[]; //new firebase

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  marker:any;
  location:any;
  curlat:any;
  curlng:any;
  origin:any;
  userInfo:any;
  //destination:any;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  destination = {
    lat:13.851070,
    lng:100.577713,
  }
  driverID= '2';
  constructor(public navCtrl: NavController,private geolocation:Geolocation,private modal: ModalController,private userService:AuthService) {}

  
  
  ionViewDidLoad(){
    console.log('Driver :'+localStorage.getItem('FCMToken'));
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if(this.userInfo!=null){
      this.saveTokenToBackend(localStorage.getItem('FCMToken'));
    }
    this.initMap();
    //get user location
  }
  async saveTokenToBackend(token) {
    let userID = this.userInfo.user.id;
    //console.log(userID);
    let body = { 
      id: userID,
      fcmToken: token
    }
    //console.log(body);
    await this.userService.apiPatchUpdateUserFCM('/user',body).then((result)=>{
      return result;
    })
  }

  getLocation(){
    return this.geolocation.getCurrentPosition();
  }

  initMap() {
    //get current position lat=resp.coords.latitude,lng=resp.coords.longitude
    this.geolocation.getCurrentPosition().then((resp)=>{
      let pos = {
        lat:resp.coords.latitude, 
        lng:resp.coords.longitude
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 15,
        center: pos
      });
      this.marker = new google.maps.Marker({
        position: pos,
        map: this.map,
        title: 'I am here!'
      });
      this.location = pos
      this.curlat=resp.coords.latitude;
      this.curlng=resp.coords.longitude;
    }).catch((error)=>{console.log('Error getting location',error);
    
    });
    
    console.log(this.location);
    //location 
    this.directionsDisplay.setMap(this.map);
  }

  openDriverDialog(){
    const myDialogoptions: ModalOptions = {
      enableBackdropDismiss:false
    };

    const myDialogData={
      name: 'Natthapong Tante',
      phone: '097-0362742',
      map:'maps',
      distance:'1km',
      timeleft:'60s'
    }

    const myDialog:Modal = this.modal.create('DriverdialogPage',{data:myDialogData},myDialogoptions);

    myDialog.present();
    myDialog.onDidDismiss((data)=>{

    });

    myDialog.onWillDismiss((data)=>{

    });

  }
  updateDriverlocation() {
    
    //update current location
    this.calculateAndDisplayRoute();
    var curDriLoc = {
      driverID:this.driverID,
      lat:this.curlat,
      lng:this.curlng
    };
    //this.firedri.child(this.driverID).update(this.location);
  }
  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.location,
      destination: this.destination,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        //this.directionsDisplay.setDirections(response);
        //console.log(response);
        console.log(response.routes[0].legs[0].distance.value);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  //calculate the distance between origin and destination poins using google metrix distance apis
  calDistance() {
    //create request
    var req = {
      origin: this.origin,
      destination: this.destination,
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC
    }
  }

  //find driver
  findDriver() {
    
  }
  
}
