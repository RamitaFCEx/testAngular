import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Picada } from "./Picada";

@Component({
  selector: 'app-picada-list',
  templateUrl: './picada-list.component.html',
  styleUrls: ['./picada-list.component.css']
})
export class PicadaListComponent implements OnInit {

  picadas: Picada[] = [
    {
      name : "uno",
      type : "01",
      price : 1,
      off : true,
      stock : 5,
      image : "./assets/img/blonde.png",
      quantity : 0,
    },
    {
      name : "dos",
      type : "02",
      price : 1,
      off : false,
      stock : 200,
      image : "./assets/img/blonde.png",
      quantity : 0,

    },
    {
      name : "tres",
      type : "03",
      price : 1,
      off : false,
      stock : 0,
      image : "./assets/img/blonde.png",
      quantity : 0,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  decreaseQuantity(picada : Picada ) : void{
    if(picada.quantity > 0){
      picada.quantity--;
    }
  }
  upQuantity(picada : Picada ) : void{
    if(picada.quantity < picada.stock){
      picada.quantity++;
    }
  }

  changeQuantity(event : KeyboardEvent, picada : Picada): void{
    if(parseInt(event.key) >= 0 && parseInt(event.key)<=9){
      console.log(event);
    }
  }

}
