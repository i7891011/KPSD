import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

let apiUrl = 'http://localhost/KUDelivery1/api/';
//let apiUrl = 'http://kudelivery.me/api/';
//let apiUrl = 'https://rookkie.com/api/';
//let apiUrl = 'http://158.108.207.7:8080/ecom/api/eshop/';
@Injectable()
export class AuthService {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials, type){

    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      //headers.append('_token' , 'aPVopiQHosz8STxNcARKJLPuyTwDHEq7ESisv3zt');
      //headers.append('Content-Type' , 'application/json');
      //headers.append('Access-Control-Allow-Origin' , '*');
      //headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      //headers.append('Accept','application/json');
      // headers.append('content-type','application/json');
      
      this.http.post(apiUrl+type, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject
          (err);
        })
    })
  }
}
