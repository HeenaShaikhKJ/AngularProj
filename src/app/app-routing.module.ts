import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ AdminProductAddComponent } from './admin-product-add/admin-product-add.component';
import{ HomeComponent } from './home/home.component';
import{AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import{ AdminLoginComponent }from './admin-login/admin-login.component';
import{ UpdateProductComponent }from './update-product/update-product.component';
import { UserloginComponent }from './userlogin/userlogin.component';
import{ UserRegistrationComponent }from './user-registration/user-registration.component';
import{ UserDashboardComponent }from './user-dashboard/user-dashboard.component';
import{ CustomerDetailsComponent }from './customer-details/customer-details.component';
import{ CartComponent }from './cart/cart.component';

const routes: Routes = 
[
  {path:"",component:HomeComponent},
  {path:"reg",component:AdminProductAddComponent},
  {path:"adminshow",component:AdminDashboardComponent},
  {path:"adminlogin",component:AdminLoginComponent},
  {path:"updateProduct/:id",component:UpdateProductComponent},
  {path:"userlogin",component:UserloginComponent},
  {path:"userRegistration",component:UserRegistrationComponent},
  {path:"userview/:name",component:UserDashboardComponent},
  {path:"customerview",component:CustomerDetailsComponent},
  {path:"cart",component:CartComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
