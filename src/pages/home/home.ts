import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ShoppinglistService } from '../../service/shopping-list.service';
import { ToastService } from '../../service/toast.service';




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
              private shopping: ShoppinglistService,
              private toast: ToastService) {

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
        this.toast.show(`Member Found`);
      } else {
        this.itemFound = false;
        this.barcode = barcodeData.text;
        this.toast.show(`Member was not found`);
      }
    }, (err) => {
      console.log(err)
    });
  }

  itemAddPage(){
    this.navCtrl.push('AddItemPage', { barcode: this.barcode})
  }

  itemShowPage(){
    this.navCtrl.push('ItemShowPage', {item: this.selectedItem})
  }


}
