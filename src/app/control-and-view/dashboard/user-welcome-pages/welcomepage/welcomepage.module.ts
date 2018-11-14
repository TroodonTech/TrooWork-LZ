import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WelcomepageComponent } from './welcomepage.component';
// import { ManagerDashBoardComponent } from '../../user-dashboards/manager-dash-board/manager-dash-board.component';
import { UserDashboardsModule } from '../../user-dashboards/user-dashboards.module';

const routes: Routes = [
  {
    path: '',
    component: WelcomepageComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    UserDashboardsModule,
    RouterModule.forChild(routes)
  
  ],
  declarations: [WelcomepageComponent]
})
export class WelcomepageModule { }
