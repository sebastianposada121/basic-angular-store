import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {HomeComponent} from "./home/home.component";
import {CartComponent} from "./cart/cart.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {ProductCartComponent} from "./components/product-cart/product-cart.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FilterModule} from "../../shared/pipes/filter/filter.module";
import {PanelComponent} from "./panel/panel.component";

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    CartComponent,
    NavbarComponent,
    ProductCardComponent,
    ProductCartComponent,
    ProductListComponent,
    PanelComponent
  ],
  imports: [
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    CommonModule,
    FilterModule,
    NgOptimizedImage,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
