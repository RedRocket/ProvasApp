import {Component} from '@angular/core';
import {NavController, NavParams, Page} from 'ionic-angular';
import {Api} from '../../providers/api';
import {ListExamsPage} from '../list-exams/list-exams';

@Component({
  templateUrl: 'build/pages/university/university.html',
})
export class UniversityPage {
  static get parameters() {
    return [[NavController], [Api], [NavParams]];
  }

  constructor(nav, api, navParams) {
    this.nav = nav;
    this.api = api;
    this.filter = {course: {}, subject: {}};
    this.api.getUniversity(navParams.get("id"));
    this.api.getCourses(navParams.get("id"));

    this.courseSelected = false;
    this.subjectSelected = false;
  }

  openPage(page){
    this.nav.push(page);
  }

  selectSubject(){
    if(this.filter.course.name != null){
      this.courseSelected = false;
      this.subjectSelected = !this.subjectSelected;
    }
  }

  selectCourse(){
    this.subjectSelected = false;
    this.courseSelected = !this.courseSelected;
  }

  chooseCourse(course){
    this.closeAll();
    this.filter.course = course;
    this.api.getSubjects(course.id);
  }

  chooseSubject(subject){
    this.closeAll();
    this.filter.subject = subject;
    this.nav.push(ListExamsPage, {id: subject.id});
  }

  closeAll(){
    this.courseSelected = false;
    this.subjectSelected = false;
  }
}
