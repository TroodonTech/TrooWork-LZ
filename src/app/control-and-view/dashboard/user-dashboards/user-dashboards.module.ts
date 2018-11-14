import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { SupervisorDashboardComponent } from './supervisor-dashboard/supervisor-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SuperadminDashboardComponent } from './superadmin-dashboard/superadmin-dashboard.component';
import { ManagerDashBoardComponent } from './manager-dash-board/manager-dash-board.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [EmployeeDashboardComponent, SupervisorDashboardComponent, AdminDashboardComponent, SuperadminDashboardComponent, ManagerDashBoardComponent],

  declarations: [EmployeeDashboardComponent, SupervisorDashboardComponent, AdminDashboardComponent, SuperadminDashboardComponent,ManagerDashBoardComponent]
})
export class UserDashboardsModule { }
