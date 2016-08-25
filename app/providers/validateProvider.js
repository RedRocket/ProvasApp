import {Page, Platform} from 'ionic-angular';
import {Injectable} from '@angular/core';
import {Toast} from 'ionic-native';

@Injectable()
export class FormValidate {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    this.platform = platform;
  }

  validatePresence(form, message, time){
    if(form != null && form != ""){
      return true;
    }
    else{
      Toast.show(message, time, 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
      return false;
    }
  }
}

