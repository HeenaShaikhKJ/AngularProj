import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminProductAddComponent } from './admin-product-add/admin-product-add.component';
//{ NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule }from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import{DataService} from './data.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ProductOrderDetailsComponent } from './product-order-details/product-order-details.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminProductAddComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    UpdateProductComponent,
    UserloginComponent,
    UserRegistrationComponent,
    UserDashboardComponent,
    CustomerDetailsComponent,
    ProductOrderDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    //NgbModule
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
