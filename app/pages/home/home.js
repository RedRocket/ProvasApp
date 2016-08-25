import {Component} from '@angular/core';
import {NavController, Page} from 'ionic-angular';
import {SearchTab} from '../search/search';
import {MyExamsTab} from '../my-exams/my-exams';
import {Api} from '../../providers/api';

@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  static get parameters() {
    return [[NavController], [Api]];
  }

  constructor(nav, api) {
    this.nav = nav;
    this.api = api;
    this.searchTab = SearchTab;
    this.myExams = MyExamsTab;
    this.listSepareted = SearchTab;
    this.listUnique = SearchTab;
  }

  openPage(page){
    this.nav.push(page);
  }

  onPageLoaded(){
    this.api.getStates();
  }
}
