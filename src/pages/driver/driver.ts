import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController, Modal } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';

//firebase
import { AngularFireDatabase } from 'angularfire2/database';
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
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController,private geolocation:Geolocation,private modal: ModalController
    ,private fdb: AngularFireDatabase) {
      this.fdb.list("/Driver/driverID/").valueChanges().subscribe(_data =>{
        this.arrData = _data;

        console.log(this.arrData)
      });
  }

  ionViewDidLoad(){
    this.initMap();
    //get user location
  }
  getLocation(){
    return this.geolocation.getCurrentPosition();
  }

  initMap() {
    //new update driver location
    this.updateDriverlocation();
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
    this.fdb.list("/Driver/driverID/").push(this.location);
  }
  /*calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }*/
  
}
