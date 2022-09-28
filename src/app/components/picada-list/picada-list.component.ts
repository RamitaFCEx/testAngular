import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PicadaCartService } from 'src/app/picada-cart.service';
import { Picada } from "./Picada";

@Component({
  selector: 'app-picada-list',
  templateUrl: './picada-list.component.html',
  styleUrls: ['./picada-list.component.css']
})
export class PicadaListComponent implements OnInit {

  max: string = "";

  picadas: Picada[] = [
    {
      name : "Blonde",
      type : "01",
      price : 1,
      off : true,
      stock : 5,
      image : "./assets/img/blonde.png",
      quantity : 0,
    },
    {
      name : "Hell fire",
      type : "02",
      price : 1,
      off : false,
      stock : 200,
      image : "./assets/img/blonde.png",
      quantity : 0,

    },
    {
      name : "Criolla",
      type : "03",
      price : 1,
      off : false,
      stock : 0,
      image : "./assets/img/blonde.png",
      quantity : 0,
    }
  ];
  

  constructor(private cart : PicadaCartService) { 
  }

  ngOnInit(): void {
  }

  addToCart(picada : Picada): void{
    if(picada.quantity > 0){
      this.cart.addToCart(picada);
      picada.stock -= picada.quantity;
      picada.quantity = 0;
    }
  }

  maxReached(m : string){
    this.max = m;
  }

 
}
