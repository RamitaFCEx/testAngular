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
      stock : 100,
      image : "assets/img/blonde.png",
    },
    {
      name : "dos",
      type : "02",
      price : 1,
      off : false,
      stock : 200,
      image : "assets/img/blonde.png",
    },
    {
      name : "tres",
      type : "03",
      price : 1,
      off : false,
      stock : 0,
      image : "assets/img/blonde.png",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
