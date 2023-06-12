import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NgOptimizedImage} from "@angular/common";
import { ProductListComponent } from './shared/components/product-list/product-list.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductCartComponent } from './shared/components/product-cart/product-cart.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterPipe } from './shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductListComponent,
    ProductCardComponent,
    CartComponent,
    ProductCartComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
