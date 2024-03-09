import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogsPageComponent } from './blogs-page/blogs-page.component';
import { AccountComponent } from './account/account.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { PetsPageComponent } from './pets-page/pets-page.component';
import { ClinicsPageComponent } from './clinics-page/clinics-page.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { SinglePetInfoComponent} from './single-pet-info/single-pet-info.component';
import { SingleClinicComponent } from './single-clinic/single-clinic.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { BlogformComponent} from './blogform/blogform.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'register',
    component: RegistrationComponent,
    title: 'register',
  },

  {
    path: 'singlepet/:id',
    component: SinglePetInfoComponent,
    title: 'singlepet',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'shop',
    component: ShopComponent,
    title: 'Shop',
  },
  {
    path: 'pets',
    component: PetsPageComponent,
    title: 'Pets',
  },
  {
    path: 'blogs',
    component: BlogsPageComponent,
    title: 'Community',
  },
  {
    path: 'clinics',
    component: ClinicsPageComponent,
    title: 'Clinics',
  },
  {
    path: 'account',
    component: AccountComponent,
    title: 'Account',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart',
  },
  {
    path: 'pet-form',
    component: PetFormComponent,
    title: 'Pet-Form',
  },
  {
    path: 'pet-info',
    component: SinglePetInfoComponent,
    title: 'Pet-info',
  },
  {
    path: 'blog/:id',
    component: SingleBlogComponent,
    title: 'blog',
  },
  
  {
    path: 'clinic/:id',
    component: SingleClinicComponent,
    title: 'clinic',

  },
  {
    path: 'products/:id',
    component: SingleProductComponent,
    title: 'Product',
  },
  {
    path: 'blogform',
    component: BlogformComponent,
    title: 'blogform',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'cart',
  },
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
