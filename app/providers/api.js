import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Toast} from 'ionic-native';
import {Platform} from 'ionic-angular';
import 'rxjs/add/operator/map';

@Injectable()
export class Api {
  static get parameters() {
    return [[Http], [Platform]];
  }

  constructor(http, platform) {
    this.http = http;
    this.platform = platform;
    this.base_url = "http://provasapp.herokuapp.com";

    //Data
    this.user = {};
    this.states = [];
    this.cities = [];
    this.universities = [];
    this.courses = [];
    this.subjects = [];
    this.exams = [];

    this.actualUniversity = {};
    this.actualSubject = {};
    this.actualExam = {};
  }

  getStates(){
    return new Promise(resolve => {
      this.http.get(this.base_url + '/api/states')
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        this.states = data;
        resolve(this.states);
      });
    });
  }

  getCities(id){
    return new Promise(resolve => {
      this.http.get(this.base_url + '/api/states/' + id + "/cities")
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        this.cities = data;
        resolve(this.cities);
      });
    });
  }

  getUniversities(id){
    return new Promise(resolve => {
      this.http.get(this.base_url + '/api/cities/' + id + "/universities")
      .map(res => res.json())
      .subscribe(data => {
        this.universities = data;
        console.log(this.universities);
        resolve(this.universities);
      });
    });
  }

  getCourses(id){
    return new Promise(resolve => {
      this.http.get(this.base_url + '/api/universities/' + id + "/courses")
      .map(res => res.json())
      .subscribe(data => {
        this.courses = data;
        console.log(this.courses);
        resolve(this.courses);
      });
    });
  }

  getSubjects(id){
    return new Promise(resolve => {
      this.http.get(this.base_url + '/api/courses/' + id + "/subjects")
      .map(res => res.json())
      .subscribe(data => {
        this.subjects = data;
        console.log(this.subjects);
        resolve(this.subjects);
      });
    });
  }

  getUniversity(id){
    return new Promise(resolve => {
      this.http.get(this.base_url + '/api/universities/' + id)
      .map(res => res.json())
      .subscribe(data => {
        this.actualUniversity = data;
        console.log(this.actualUniversity);
        resolve(this.actualUniversity);
      });
    });
  }

  getSubject(id){
    return new Promise(resolve => {
      this.http.get(this.base_url + '/api/subjects/' + id)
      .map(res => res.json())
      .subscribe(data => {
        this.actualSubject = data;
        console.log(this.actualSubject);
        resolve(this.actualSubject);
      });
    });
  }

  getExam(id){
    return new Promise(resolve => {
      this.http.get(this.base_url + '/api/exams/' + id)
      .map(res => res.json())
      .subscribe(data => {
        this.actualExam = data;
        console.log(this.actualExam);
        resolve(this.actualExam);
      });
    });
  }

  getExams(id){
    return new Promise(resolve => {
      this.http.get(this.base_url + '/api/subjects/' + id + '/exams')
      .map(res => res.json())
      .subscribe(data => {
        this.exams = data;
        console.log(this.exams);
        resolve(this.exams);
      });
    });
  }

  sendRequisition(requisition) {
    return new Promise(resolve => {
      this.http.post(this.base_url + '/api/requisitions',
        {
          text: requisition,
        }
      )
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      });
    });
  }

  addViewToCity(id) {
    return new Promise(resolve => {
      this.http.patch(this.base_url + '/api/cities/'+ id +'/add_view'
      )
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      });
    });
  }

  addViewToUniversity(id) {
    return new Promise(resolve => {
      this.http.patch(this.base_url + '/api/universities/'+ id +'/add_view'
      )
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      });
    });
  }

  addViewToExam(id) {
    return new Promise(resolve => {
      this.http.patch(this.base_url + '/api/exams/'+ id +'/add_view'
      )
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      });
    });
  }
}

