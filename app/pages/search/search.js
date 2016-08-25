import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Api} from '../../providers/api';
import {UniversityPage} from '../university/university';
import {NotFoundPage} from '../not-found/not-found';

@Component({
  templateUrl: 'build/pages/search/search.html',
})
export class SearchTab {
  static get parameters() {
    return [[NavController], [Api]];
  }

  constructor(nav, api) {
    this.nav = nav;
    this.api = api;
    this.filter = {state:{}, city: {}, university: {}};

    this.stateSelected = false;
    this.citySelected = false;
    this.universitySelected = false;
  }

  onPageWillEnter(){
    this.filter = {state:{}, city: {}, university: {}};
  }

  selectState(){
    this.citySelected = false;
    this.universitySelected = false;
    this.stateSelected = !this.stateSelected;
  }

  chooseState(state){
    this.closeAll();
    this.filter.state = state;
    this.api.getCities(state.id);


    this.filter.city = {};
    this.filter.university = {};
  }

  selectCity(){
    if(this.filter.state.name != null){
      this.stateSelected = false;
      this.universitySelected = false;
      this.citySelected = !this.citySelected;
    }
  }

  chooseCity(city){
    this.closeAll();
    this.filter.city = city;
    this.api.getUniversities(city.id);

    this.filter.university = {};
  }

  selectUniversity(){
    if(this.filter.city.name != null){
      this.stateSelected = false;
      this.citySelected = false;
      this.universitySelected = !this.citySelected;
    }
  }

  chooseUniversity(university){
    this.closeAll();
    this.filter.university = university;
    this.api.addViewToCity(this.filter.city.id);
    this.api.addViewToUniversity(university.id);
    this.nav.push(UniversityPage, {id: university.id});
  }

  notFound(){
    this.closeAll();
    this.nav.push(NotFoundPage)
  }

  closeAll(){
    this.citySelected = false;
    this.universitySelected = false;
    this.stateSelected = false;
  }
}
