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

@NgModule({
  declarations: [
    AppComponent,
    MailsendComponent,
    SignupComponent,
    SigninComponent,
    NewpassComponent,
    MyaccountComponent
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
