import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupPlatinumComponent } from './components/signup-platinum/signup-platinum.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpGoldenComponent } from './components/sign-up-golden/sign-up-golden.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { TopBarPlanComponent } from './components/top-bar-plan/top-bar-plan.component';
import { IndexComponent } from './components/index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsindexComponent } from './components/cardsindex/cardsindex.component';
import { CardsPlanComponent } from './components/cards-plan/cards-plan.component';
import { PlanComponent } from './components/plan/plan.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TopBarProfileComponent } from './components/top-bar-profile/top-bar-profile.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { InfoindexComponent } from './components/infoindex/infoindex.component';
import { PlanindexComponent } from './components/planindex/planindex.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopBarProjectComponent } from './components/top-bar-project/top-bar-project.component';
import { ProjectComponent } from './components/project/project.component';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupPlatinumComponent,
    SignUpComponent,
    SignUpGoldenComponent,
    TopBarComponent,
    TopBarPlanComponent,
    IndexComponent,
    FooterComponent,
    CardsindexComponent,
    CardsPlanComponent,
    PlanComponent,
    ProfileComponent,
    TopBarProfileComponent,
    AboutusComponent,
    InfoindexComponent,
    PlanindexComponent,
    SidebarComponent,
    TopBarProjectComponent,
    ProjectComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
