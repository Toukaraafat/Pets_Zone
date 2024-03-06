import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product-card/product-card.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  { path: 'Register',
  component: RegisterComponent,
  title: 'register',
},
{
  path: 'login',
  component: LoginComponent,
  title: 'Login',
},
{ path: 'product', component: ProductComponent },
{ path: 'cart', component: CartComponent },

  {
    path: '**',
    component: NotFoundComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


