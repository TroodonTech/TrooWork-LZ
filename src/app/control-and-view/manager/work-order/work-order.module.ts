import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuickOrderComponent } from './create-quick-order/create-quick-order.component';
import { ViewWorkOrdersComponent } from './view-work-orders/view-work-orders.component';
import { CreateWorkorderComponent } from './create-workorder/create-workorder.component';
import { EditWorkOrderComponent } from './edit-work-order/edit-work-order.component';
import { UpdateRecurWorkorderComponent } from './update-recur-workorder/update-recur-workorder.component';
import { CreateBatchWorkorderComponent } from './create-batch-workorder/create-batch-workorder.component';
import { ViewBatchWorkorderComponent } from './view-batch-workorder/view-batch-workorder.component';
import { EditBatchWorkorderComponent } from './edit-batch-workorder/edit-batch-workorder.component';
import { WorkOrderTypeComponent } from './work-order-type/work-order-type.component';
import { EditWorkorderTypeComponent } from './edit-workorder-type/edit-workorder-type.component';
import { CreateWorkorderTypeComponent } from './create-workorder-type/create-workorder-type.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreateQuickOrderComponent, ViewWorkOrdersComponent, CreateWorkorderComponent, EditWorkOrderComponent, UpdateRecurWorkorderComponent, CreateBatchWorkorderComponent, ViewBatchWorkorderComponent, EditBatchWorkorderComponent, WorkOrderTypeComponent, EditWorkorderTypeComponent, CreateWorkorderTypeComponent],
  exports:[CreateQuickOrderComponent, ViewWorkOrdersComponent, CreateWorkorderComponent, EditWorkOrderComponent, UpdateRecurWorkorderComponent, CreateBatchWorkorderComponent, ViewBatchWorkorderComponent, EditBatchWorkorderComponent, WorkOrderTypeComponent, EditWorkorderTypeComponent, CreateWorkorderTypeComponent]
})
export class WorkOrderModule { }
