import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeContentComponent } from './welcome-content/welcome-content.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ContentComponent } from './content/content.component';
import { FormsModule } from '@angular/forms';
import { ButtonsComponent } from './buttons/buttons.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LocationComponent } from './location/location.component';
import { VoitureComponent } from './voiture/voiture.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AssuranceComponent } from './assurance/assurance.component';
import { UpdateVoitureComponent } from './update-voiture/update-voiture.component';
import { UpdateAssuranceComponent } from './update-assurance/update-assurance.component';
import { AgenceComponent } from './agence/agence.component';
import { UpdateAgenceComponent } from './update-agence/update-agence.component';
import { UsersComponent } from './users/users.component';
import { SwiperModule } from 'swiper/angular';
import { MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeContentComponent,
    LoginFormComponent,
    ContentComponent,
    ButtonsComponent,
    HomeComponent,
    AdminComponent,
    SideBarComponent,
    VoitureComponent,
    LocationComponent,
    AssuranceComponent,
    UpdateVoitureComponent,
    UpdateAssuranceComponent,
    AgenceComponent,
    UpdateAgenceComponent,
    UsersComponent,
    FooterComponent,
    CarsComponent,
    CarDetailsComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    SwiperModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
