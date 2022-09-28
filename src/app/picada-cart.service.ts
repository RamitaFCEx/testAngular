import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Picada } from './components/picada-list/Picada';

@Injectable({
  providedIn: 'root'
})
export class PicadaCartService {
  //maneja la logica del carrito  

  private _cartList: Picada[] = [];
  cartList: BehaviorSubject<Picada[]> = new BehaviorSubject<Picada[]>([]);

  constructor() { }

  addToCart(picada : Picada){
    // let repeated = false;

    // for (let pic of this.cartList) {
    //   if(pic.name === picada.name){
    //     pic.quantity += picada.quantity;
    //     repeated = true;
    //   }
    // }
    // if(!repeated){
    //   this.cartList.push({...picada});
    // }


    let item : Picada | undefined = this._cartList.find((i1) => i1.name === picada.name);

    if (!item) {
      this._cartList.push({...picada});
    } else {
      item.quantity += picada.quantity;
    }

    for (let pic of this._cartList) {
      console.log(`Quieren ${pic.quantity} ${pic.name}`);
    }
    console.log(`----Variedades de picadas pedidas ${this._cartList.length}----`);
    this.cartList.next(this._cartList);//emitir cambios
  
    
    
    
   
    
  }

  
}
