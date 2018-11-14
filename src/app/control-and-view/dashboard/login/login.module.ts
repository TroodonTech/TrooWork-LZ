import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
  
    HttpClientModule,
    MDBBootstrapModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
