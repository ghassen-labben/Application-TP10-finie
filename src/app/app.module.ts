import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { DashDirecteurComponent } from './components/directeur/dash-directeur/dash-directeur.component';
import { DashboardEmployeComponent } from './components/employe/dashboard-employe/dashboard-employe.component';
import { HomeComponent } from './components/directeur/home/home.component';
import { MenuComponent } from './components/directeur/menu/menu.component';
import { MenuEmployeComponent } from './components/employe/menu-employe/menu-employe.component';
import { PresentationComponent } from './components/directeur/presentation/presentation.component';
import { EmployeModule } from './components/employe/employe.module';
import { DirecteurModule } from './components/directeur/directeur.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    DashDirecteurComponent,
    DashboardEmployeComponent,
    HomeComponent,
    MenuComponent,
    MenuEmployeComponent,
    PresentationComponent

  ],
  imports: [
    BrowserModule,
    EmployeModule,
    DirecteurModule,
    AppRoutingModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
