import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LocationComponent } from './location/location.component';
import { VoitureComponent } from './voiture/voiture.component';
import { UpdateVoitureComponent } from './update-voiture/update-voiture.component';
import { AssuranceComponent } from './assurance/assurance.component';
import { UpdateAssuranceComponent } from './update-assurance/update-assurance.component';
import { AgenceComponent } from './agence/agence.component';
import { UpdateAgenceComponent } from './update-agence/update-agence.component';
import { UsersComponent } from './users/users.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: '', component: HomeComponent},
  { path: 'cars', component: CarsComponent},
  { path: 'car_details/:id', component: CarDetailsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'admin',
   component: AdminComponent,
   children: [
    { path: 'location', component: LocationComponent},
    { path: 'voiture', component: VoitureComponent},
    { path: 'assurance', component: AssuranceComponent},
    { path: 'voiture/update/:id', component: UpdateVoitureComponent},
    { path: 'assurance/update/:id', component: UpdateAssuranceComponent},
    { path: 'agence', component: AgenceComponent },
    { path: 'agence/update/:id', component: UpdateAgenceComponent},
    { path: 'users', component: UsersComponent},
    { path: 'dashboard', component: DashboardComponent}
    
   ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
