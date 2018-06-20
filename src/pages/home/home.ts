import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ShoppinglistService } from '../../service/shopping-list.service';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  shoppingitems: any ;
  selectedItem: any;
  itemFound: boolean;
  barcode: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              private barcodeScanner: BarcodeScanner,
              private shopping: ShoppinglistService) {

             this.shopping.getShoppingList()
            .valueChanges()
            .subscribe( data => {
              this.shoppingitems = data;
              console.log(this.shoppingitems)
            })

  }

  scan() {
    this.selectedItem = {};
    this.barcodeScanner.scan().then((barcodeData) => {
      this.selectedItem = this.shoppingitems.find(item => item.plu === barcodeData.text);
      if(this.selectedItem !== undefined) {
        this.itemFound = true;
        console.log('Item is found')
      } else {
        this.itemFound = false;
        this.barcode = barcodeData.text
        console.log('Item wasnt found' + barcodeData.text );
      }
    }, (err) => {
      console.log(err)
    });
  }

  itemAddPage(){
    this.navCtrl.push('AddItemPage', { barcode: this.barcode})
  }



}
