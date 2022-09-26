import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';


import { PicadaListComponent } from './components/picada-list/picada-list.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { PicadaAboutComponent } from './components/picada-about/picada-about.component';
import { ShopComponent } from './components/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    PicadaListComponent,
    CarritoComponent,
    PicadaAboutComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


