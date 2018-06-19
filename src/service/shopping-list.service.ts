import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../models/item/item.model";
import { Observable } from "rxjs";



@Injectable()

export class ShoppinglistService{

    private ShoppingListRef  = this.db.list<Item>('shopping-list')

    constructor(private db: AngularFireDatabase){ }

    getShoppingList(){
        return this.ShoppingListRef;
    }

    AddShoppingListItem(item: Item){
       return this.ShoppingListRef.push(item)
    }

    editListItem(item: Item){
        return this.ShoppingListRef.update(item.key, item)
    }

    removeListItem(item: Item){
        return this.ShoppingListRef.remove(item.key)
    }
}
