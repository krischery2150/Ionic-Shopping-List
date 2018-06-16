import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Item } from '../../models/item/item.model';
import { ShoppinglistService } from '../../service/shopping-list.service';

/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {

  shoppinglist$: Observable<Item[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private shopping: ShoppinglistService) {

    this.shoppinglist$ = this.shopping
    .getShoppingList() // DB LIST
    .snapshotChanges() // FROM THAT DB LIST GIVE THE KEYS AND THE VALUES
    .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, 
          ...c.payload.val()
        }))
      }
    )

  }


  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

}
