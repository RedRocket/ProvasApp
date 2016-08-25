import {Component} from '@angular/core';
import {NavController, NavParams, Page} from 'ionic-angular';
import {Api} from '../../providers/api';
import {ExamGalleryPage} from '../exam-gallery/exam-gallery';

@Component({
  templateUrl: 'build/pages/list-exams/list-exams.html',
})
export class ListExamsPage {
  static get parameters() {
    return [[NavController], [Api], [NavParams]];
  }

  constructor(nav, api, navParams) {
    this.nav = nav;
    this.api = api;
    this.navParams = navParams;
    this.api.getSubject(navParams.get("id"));
    this.api.getExams(navParams.get("id"));
  }

  openPage(page){
    this.nav.push(page);
  }

  goToExam(id){
    this.nav.push(ExamGalleryPage, {id: id});
  }
}
