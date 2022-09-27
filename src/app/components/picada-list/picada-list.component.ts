import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  maxReached(m : string){
    console.log(m);
    this.max = m;
  }

 
}
