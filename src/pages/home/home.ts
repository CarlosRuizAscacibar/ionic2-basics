import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { UsersPage } from '../users/users';
import { ShopPage } from '../shop/shop';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userPage = UsersPage;
  constructor(public navCtrl: NavController) {}

  onGoToShop(){
    this.navCtrl.push(ShopPage);
  }

  onGoToUsers(){
    this.navCtrl.push(this.userPage)
      .catch((error) => console.log(error))
  }
}
