import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuildingViewComponent } from './building-view.component';
// import {UserDashboardsModule} from '../../../dashboard/user-dashboards/user-dashboards.module';
// import { ManagerDashBoardComponent } from '../../../dashboard/user-dashboards/manager-dash-board/manager-dash-board.component';
import {InventoryModule} from '../inventory.module';
const routes: Routes = [
  {
    path: '',
    component: BuildingViewComponent
  }
  
];
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MDBBootstrapModule,
    // UserDashboardsModule,
    InventoryModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuildingViewComponent]
})
export class BuildingViewModule { }
