import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { PicadaAboutComponent } from './components/picada-about/picada-about.component';
import { BrowserModule } from '@angular/platform-browser';
const routes: Routes = [
 { path: '',redirectTo: 'shop',pathMatch: 'full' },
 { path: 'shop', component: ShopComponent },
 { path: 'about', component: PicadaAboutComponent },
];

@NgModule({
 imports: [RouterModule.forRoot(routes), BrowserModule],
 exports: [RouterModule]
})
export class AppRoutingModule { }