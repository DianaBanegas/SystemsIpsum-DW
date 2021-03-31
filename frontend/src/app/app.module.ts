import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupPlatinumComponent } from './components/signup-platinum/signup-platinum.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpGoldenComponent } from './components/sign-up-golden/sign-up-golden.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { TopBarPlanComponent } from './top-bar-plan/top-bar-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupPlatinumComponent,
    SignUpComponent,
    SignUpGoldenComponent,
    TopBarComponent,
    TopBarPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
