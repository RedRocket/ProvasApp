import {Component, ViewChild, provide} from '@angular/core';
import {Http, BrowserXhr, HTTP_PROVIDERS} from '@angular/http';
import {ionicBootstrap, Platform, Toast} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {FbProvider} from './providers/fbProvider';
import {GoogleProvider} from './providers/googleProvider';
import {Api} from './providers/api';
import {FormValidate} from './providers/validateProvider';

@Component({
  templateUrl: 'build/app.html',
  providers: [FbProvider, GoogleProvider, Api, FormValidate],
  queries: {
    nav: new ViewChild('content')
  }
})
class MyApp {
  static get parameters() {
    return [[Platform], [Api]];
  }

  constructor(platform, api) {
    this.platform = platform;
    this.api = api;

    this.initializeApp();

    this.rootPage = HomePage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page);
  }
}

ionicBootstrap(MyApp);
