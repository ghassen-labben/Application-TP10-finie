import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthDirGuard } from 'src/app/auth-dir.guard';
import { DashDirecteurComponent } from './dash-directeur/dash-directeur.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes = [
  {
    path: 'dir', component: HomeComponent,
    canActivate: [AuthDirGuard],
    children: [
      { path: 'dashbord', component: DashDirecteurComponent },
      { path: 'presentation', component: PresentationComponent },
      { path: '**', redirectTo: 'dash' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirecteurRoutingModule { }
