import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../models/item/item.model";



@Injectable()

export class ShoppinglistService{

    private ShoppingListRef = this.db.list('shopping-list')

    constructor(private db: AngularFireDatabase){ }

    getShoppingList(){
        return this.ShoppingListRef;
    }

    AddShoppingListItem(item: Item){
       return this.ShoppingListRef.push(item)
    }

}