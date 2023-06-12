import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CartComponent} from "./cart/cart.component";
import {DashboardComponent} from "./dashboard.component";
import {PanelComponent} from "./panel/panel.component";
import {AdminGuard} from "../../shared/guards/admin/admin.guard";
import {LoginGuard} from "../../shared/guards/user/login.guard";

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: '#', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'cart', component: CartComponent, canActivate: [LoginGuard]
      },
      {
        path: 'panel', component: PanelComponent, canActivate: [LoginGuard, AdminGuard]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
