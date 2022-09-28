import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }
  @Input()
  quantity!: number;
  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  decreaseQuantity() : void{
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
  upQuantity() : void{
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else{
      this.maxReached.emit("MAX");
    }
  }

  changeQuantity(event : KeyboardEvent): void{
    if(((parseInt(event.key) >= 0 && parseInt(event.key)<=9) && !(event.key==='e') )){
     // console.log(event);
      this.quantityChange.emit(this.quantity);
    }
  }

  omit_special_char(event : KeyboardEvent){//evita ingresar el numero e
    return !(event.key === 'e'); 
  }

}
