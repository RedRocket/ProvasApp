import {Page, Platform} from 'ionic-angular';
import {Injectable} from '@angular/core';

@Injectable()
export class FbProvider {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    this.platform = platform;
  }

  login() {
    return new Promise((resolve, reject) => {
    if(this.platform.is('cordova')) {
      facebookConnectPlugin.login([ 'email' ], (success) => {
        console.log(JSON.stringify(success));
        resolve(success);
      },(err) => {
        console.log(JSON.stringify(err));
        reject(err);
      });

      } else {
        console.log("Please run me on a device");
        reject('Please run me on a device');
      }
    });
  }

  getCurrentUserProfile() {
    return new Promise((resolve, reject) => {
      facebookConnectPlugin.api('me?fields=email,name,age_range,picture,birthday,email,first_name,last_name,gender', null,
      (profileData) => {
        console.log(JSON.stringify(profileData));
        resolve(profileData);
      },(err) => {
        console.log(JSON.stringify(err));
        reject(err);
      });
    });
  }
}

