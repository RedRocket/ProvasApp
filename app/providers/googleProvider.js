import {Page, Platform} from 'ionic-angular';
import {Injectable} from '@angular/core';

@Injectable()
export class GoogleProvider {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    this.platform = platform;
  }

  login() {
    return new Promise((resolve, reject) => {
    if(this.platform.is('cordova')) {
        window.plugins.googleplus.login({
          'scopes': 'https://www.googleapis.com/auth/contacts.readonly profile email',
          'offline': false,
          "webClientId" : "",
        },
        function (obj) {
          console.log(JSON.stringify(obj));
          resolve(obj);
        },
        function (msg) {
          console.log("Fail to Login");
          reject('Fail to Login');
        });
      }
      else {
        console.log("Please run me on a device");
        reject('Please run me on a device');
      }
    });
  }
}
