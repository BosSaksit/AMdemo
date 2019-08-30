import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu:MenuController,public navCrtl :NavController) {}
  gotodashborad(){
    this.navCrtl.navigateForward('dashborad');
  }
}