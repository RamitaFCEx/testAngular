import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { PicadaCartService } from 'src/app/picada-cart.service';
import { Picada } from '../picada-list/Picada';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito = {
    img : "assets/img/carrito.jpg"
  }

  cartList$: Observable<Picada[]>;

  constructor(private cart : PicadaCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }
  


  ngOnInit(): void {
  }

}
