import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import components
import { LoginComponent } from './components/login/login.component';
import { SignupPlatinumComponent } from './components/signup-platinum/signup-platinum.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpGoldenComponent } from './components/sign-up-golden/sign-up-golden.component';
import { IndexComponent } from './components/index/index.component';


const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'login', component:LoginComponent},
  {path:'signUpPlatinum', component:SignupPlatinumComponent},
  {path:'signUp', component:SignUpComponent},
  {path:'signUpGolden', component:SignUpGoldenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//Exportar modulo
export const routing: NgModule=RouterModule.forRoot(routes);
