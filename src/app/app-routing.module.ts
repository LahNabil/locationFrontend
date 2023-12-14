import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LocationComponent } from './location/location.component';
import { VoitureComponent } from './voiture/voiture.component';
import { UpdateVoitureComponent } from './update-voiture/update-voiture.component';
import { AssuranceComponent } from './assurance/assurance.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: '', component: HomeComponent},
  { path: 'admin',
   component: AdminComponent,
   children: [
    { path: 'location', component: LocationComponent},
    { path: 'voiture', component: VoitureComponent},
    { path: 'assurance', component: AssuranceComponent},
    { path: 'voiture/update/:id', component: UpdateVoitureComponent}
   ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
