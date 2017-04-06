import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuyoutPage } from '../buyout/buyout';

@Component({
  selector: 'shop-page',
  templateUrl: 'shop.html'
})

export class ShopPage {

  constructor(private navCtrl: NavController){

  }


  onLoadBuyout(name: string){
    this.navCtrl.push(BuyoutPage, {buyoutName: name});
  }

}
