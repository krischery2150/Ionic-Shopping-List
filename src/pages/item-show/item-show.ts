import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';

/**
 * Generated class for the ItemShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-show',
  templateUrl: 'item-show.html',
})
export class ItemShowPage {

  barcode: string;

  item: Item = {
    name:'',
    quantity: 1,
    price: 0,
    plu: ''
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
     this.item = this.navParams.get('item')
  }

}
