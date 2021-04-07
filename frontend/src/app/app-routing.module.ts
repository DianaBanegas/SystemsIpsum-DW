import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import components
import { LoginComponent } from './components/login/login.component';
import { SignupPlatinumComponent } from './components/signup-platinum/signup-platinum.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpGoldenComponent } from './components/sign-up-golden/sign-up-golden.component';
import { IndexComponent } from './components/index/index.component';
import { PlanComponent } from './components/plan/plan.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProyectComponent } from './components/proyect/proyect.component';


const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'login', component:LoginComponent},
  {path:'signUpPlatinum', component:SignupPlatinumComponent},
  {path:'signUp', component:SignUpComponent},
  {path:'signUpGold', component:SignUpGoldenComponent },
  {path:'plan', component:PlanComponent },
  {path:'profile', component:ProfileComponent },
  {path:'proyect', component:ProyectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//Exportar modulo
export const routing: NgModule=RouterModule.forRoot(routes);
