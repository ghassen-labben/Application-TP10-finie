import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthEmpGuard } from 'src/app/auth-emp.guard';
import { LoginComponent } from '../login/login.component';
import { AccueilEmployeComponent } from './accueil-employe/accueil-employe.component';
import { ContactEmployeComponent } from './contact-employe/contact-employe.component';
import { DashboardEmployeComponent } from './dashboard-employe/dashboard-employe.component';

const routes: Routes = [
  {
    path: 'emp', component: DashboardEmployeComponent,
    canActivate: [AuthEmpGuard],

    children: [
      { path: '', redirectTo: 'accueil', pathMatch: 'full' },
      { path: 'accueil', component: AccueilEmployeComponent },
      { path: 'contact', component: ContactEmployeComponent }
    ]

  },
  {
    path: 'login', component: LoginComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRoutingModule { }
