import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemShowPage } from './item-show';

@NgModule({
  declarations: [
    ItemShowPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemShowPage),
  ],
})
export class ItemShowPageModule {}
