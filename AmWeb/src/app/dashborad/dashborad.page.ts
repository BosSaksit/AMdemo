import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector:'app-dashborad',
  templateUrl: './dashborad.page.html',
  styleUrls: ['./dashborad.page.scss'],
})
export class DashboradPage implements OnInit {

  constructor( public navCrtl:NavController) { }

  private newMethod(): string {
    return 'app-dashborad';
  }

  ngOnInit() {
  }

  gotoStorepage(){
    this.navCrtl.navigateForward('store');
    
  }
  gotoUserpage(){
    this.navCrtl.navigateForward('user');
  }

}
