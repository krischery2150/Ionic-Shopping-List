import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { ShoppinglistService } from '../../service/shopping-list.service';
import { ToastService } from '../../service/toast.service';


/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  item: Item = {
    name:'',
    quantity: 1,
    price: 0,
    plu: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private shopping: ShoppinglistService, private toast: ToastService) {
  }

  addItem(item: Item){
    return this.shopping.AddShoppingListItem(item).then(ref => {
      this.toast.show(`${item.name} was created`);
      this.navCtrl.setRoot('AddShoppingItemPage', {key: ref.key})
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

}
