import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyaccountComponent } from './modules/authentication/myaccount/myaccount.component';
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
    component:NavbarComponent
  },
  {  
    path:'acount',
    component:MyaccountComponent
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
