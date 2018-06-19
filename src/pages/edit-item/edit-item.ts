import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { ShoppinglistService } from '../../service/shopping-list.service';
import { ToastService } from '../../service/toast.service';


/**
 * Generated class for the EditItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {

  item: Item;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private shopping: ShoppinglistService, private toast: ToastService) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item')
  }

  saveItem(item: Item){
    this.shopping.editListItem(item).then(
      () => {
        this.toast.show(`successfully ${item.name} edited`);
        this.navCtrl.setRoot('AddShoppingItemPage')
      }
    )
  }

  removeItem(item: Item){
    this.shopping.removeListItem(item).then(
      () => {
        this.toast.show(`${item.name} was deleted`);
        this.navCtrl.setRoot('AddShoppingItemPage')
      }
    )
  }
}
