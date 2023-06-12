import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {NgForOf} from "@angular/common";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRoutingModule,
    NgForOf
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
