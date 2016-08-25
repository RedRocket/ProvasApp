import {Component} from '@angular/core';
import {NavController, ToastController, Page} from 'ionic-angular';
import {Api} from '../../providers/api';

@Component({
  templateUrl: 'build/pages/not-found/not-found.html',
})
export class NotFoundPage {
  static get parameters() {
    return [[NavController], [Api], [ToastController]];
  }

  constructor(nav, api, toast) {
    this.nav = nav;
    this.api = api;
    this.requisition = {type: null, text: null};
    this.typeSelected = false;
    this.toast = toast;
  }

  openPage(page){
    this.nav.push(page);
  }

  selectType(){
    this.typeSelected = !this.typeSelected;
  }

  chooseType(type){
    this.typeSelected = false;
    this.requisition.type = type;
  }

  sendRequisition(){
    var text = "";
    switch(this.requisition.type) {
      case 'Cidade':
        text = "Não encontrei a minha Cidade. " + this.requisition.text
        break;
      case 'Universidade':
        text = "Não encontrei a minha Universidade. " + this.requisition.text
        break;
      case 'Curso':
        text = "Não encontrei o meu Curso. " + this.requisition.text
        break;
      case 'Disciplina':
        text = "Não encontrei a minha Disciplina. " + this.requisition.text
        break;
      default:
        break;
    }

    this.api.sendRequisition(text).then(data => {
      let toast = this.toast.create({
        message: 'Hey! Muito obrigado, iremos checar isso e logo logo entraremos em contato.',
        duration: 3000
      });
      toast.present();
      this.nav.popToRoot();
    });
  }
}
