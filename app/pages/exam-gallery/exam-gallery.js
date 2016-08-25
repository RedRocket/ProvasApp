import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {Modal, Loading, NavController, NavParams, Page} from 'ionic-angular';
import {Api} from '../../providers/api';

@Component({
  templateUrl: 'build/pages/exam-gallery/exam-gallery.html',
  queries: {
    slider: new ViewChild('slider')
  }
})
export class ExamGalleryPage {
  static get parameters() {
    return [[NavController], [Api], [ElementRef], [NavParams]];
  }

  constructor(nav, api, elementRef, navParams) {
    this.elementRef = elementRef;
    this.nav = nav;
    this.api = api;
    this.slideOptions = {
      direction: 'horizontal',
      initialSlide: 0,
      loop: false,
      pager: false,
      onlyExternal: false,
    };

    this.api.getExam(navParams.get("id"))
  }
}
