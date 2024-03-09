import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
// import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { ShopSectionComponent } from './shop-section/shop-section.component';
import { SinglePetInfoComponent} from './single-pet-info/single-pet-info.component';
import { PopupComponent} from './popup/popup.component';
import { BlogformComponent} from './blogform/blogform.component';
import { HttpClientModule} from '@angular/common/http';
// import { ShowComponent} from './show/show.component';

import AOS from 'aos';
AOS.init();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    // RegisterComponent,
    LoginComponent,
    TopHeaderComponent,
    // ShowComponent,
    ShopSectionComponent,
    SinglePetInfoComponent,
    PopupComponent,
    BlogformComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Pets_Zone';
}
