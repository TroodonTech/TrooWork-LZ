import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ManagerDashBoardComponent } from './manager-dash-board.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerDashBoardComponent
  }
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ManagerDashBoardComponent]
})
export class ManagerDashBoardModule { }
