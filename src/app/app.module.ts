import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailsendComponent } from './modules/authentication/mailsend/mailsend.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './modules/authentication/signup/signup.component';
import { SigninComponent } from './modules/authentication/signin/signin.component';
import { NewpassComponent } from './modules/authentication/newpass/newpass.component';
import { MyaccountComponent } from './modules/authentication/myaccount/myaccount.component';
import { HomeComponent } from './modules/home/home.component';
import { DeskmenuComponent } from './modules/menu/deskmenu/deskmenu.component';
import { MobilemenuComponent } from './modules/menu/mobilemenu/mobilemenu.component';
import { MyorderComponent } from './modules/myorder/myorder.component';
import { OrdersComponent } from './modules/orders/orders.component';
import { NavbarComponent } from './modules/menu/navbar/navbar.component';
import { ProdetailComponent } from './modules/products/prodetail/prodetail.component';
import { CheckoutComponent } from './modules/myorder/checkout/checkout.component';
import { FooterComponent } from './modules/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MailsendComponent,
    SignupComponent,
    SigninComponent,
    NewpassComponent,
    MyaccountComponent,
    HomeComponent,
    DeskmenuComponent,
    MobilemenuComponent,
    MyorderComponent,
    OrdersComponent,
    NavbarComponent,
    ProdetailComponent,
    CheckoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
