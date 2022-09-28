import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PicadaCartService } from 'src/app/picada-cart.service';
import { PicadaDataService } from 'src/app/picada-data.service';
import { Picada } from "./Picada";

@Component({
  selector: 'app-picada-list',
  templateUrl: './picada-list.component.html',
  styleUrls: ['./picada-list.component.css']
})
export class PicadaListComponent implements OnInit {

  max: string = "";

  picadas: Picada[] = [];

  picadas0: Picada[] = [
    {
      name : "Blonde",
      price : 1,
      off : true,
      stock : 5,
      image : "./assets/img/blonde.png",
      quantity : 0,
    },
    {
      name : "Hell fire",
      price : 1,
      off : false,
      stock : 200,
      image : "./assets/img/blonde.png",
      quantity : 0,

    },
    {
      name : "Criolla",
      price : 1,
      off : false,
      stock : 0,
      image : "./assets/img/blonde.png",
      quantity : 0,
    }
  ];
  

  constructor(
    private cart : PicadaCartService,
    private PicadaDataService : PicadaDataService) {
  }

  ngOnInit(): void {
    this.PicadaDataService.getAll().subscribe(pic => this.picadas = pic);
    
  }

  addToCart(picada : Picada): void{
    if((picada.quantity > 0)&& (picada.stock >= picada.quantity)){
      this.cart.addToCart(picada);
      picada.stock -= picada.quantity;
      picada.quantity = 0;
    }
  }

  maxReached(m : string){
    this.max = m;
  }

 
}
