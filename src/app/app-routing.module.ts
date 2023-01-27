import { compileClassMetadata } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailsendComponent } from './modules/authentication/mailsend/mailsend.component';
import { MyaccountComponent } from './modules/authentication/myaccount/myaccount.component';
import { NewpassComponent } from './modules/authentication/newpass/newpass.component';
import { SigninComponent } from './modules/authentication/signin/signin.component';
import { SignupComponent } from './modules/authentication/signup/signup.component';
import { HomeComponent } from './modules/home/home.component';
import { DeskmenuComponent } from './modules/menu/deskmenu/deskmenu.component';
import { MobilemenuComponent } from './modules/menu/mobilemenu/mobilemenu.component';
import { NavbarComponent } from './modules/menu/navbar/navbar.component';
import { MyorderComponent } from './modules/myorder/myorder.component';

const routes: Routes = [
  {  
    path:'',
    component:HomeComponent
  },
  {  
    path:'home',
    component:HomeComponent
  },
  {
    path:'mailsend',
    component:MailsendComponent
  },
  {  
    path:'account',
    component:MyaccountComponent
  },
  {
    path:'newpass',
    component:NewpassComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {  
    path:'myorder',
    component:MyorderComponent
  },
  {  
    path:'menu/mobile',
    component:MobilemenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
