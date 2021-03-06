import { Component, OnInit } from '@angular/core';
import { workorder } from '../../../model-class/work-order';
import { WorkOrderServiceService } from '../../../service/work-order-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-quick-work-order',
  templateUrl: './create-quick-work-order.component.html',
  styleUrls: ['./create-quick-work-order.component.scss']
})
export class CreateQuickWorkOrderComponent implements OnInit {
  EmployeeOption: workorder[];
  facilitylist: workorder[];
  marked = false;
  prioritylist: workorder[];
  EmployeeKey;
  WorkorderNotes;
  FacilityKey;
  PriorityKey;
  isPhotoRequired;
  createworkorder;
  wot;
  notes;
  facilityString;
  zone;
  eqp_key;
  shift;
  priority;
  isReccuring;
  isrecurring; // for setting bit value 1 or 0
  startDT;
  endDT;
  workTime;
  dailyRecc_gap; // dailyreccuringGap
  is_PhotoRequired;
  is_BarcodeRequired;
  occurenceinstance;

  intervaltype;
  repeatinterval;
  occursonday;

  workorderCreation;

  role: String;
  name: String;
  employeekey: Number;
  IsSupervisor: Number;
  OrganizationID: Number;
  emp_key;
  url_base64_decode(str) {
    var output = str.replace('-', '+').replace('_', '/');
    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += '==';
        break;
      case 3:
        output += '=';
        break;
      default:
        throw 'Illegal base64url string!';
    }
    return window.atob(output);
  }


  constructor(private router: Router, private WorkOrderServiceService: WorkOrderServiceService) { }

  convert_DT(str) {
    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join('-');
  }

  toggleVisibility(e) {
    if (e.target.checked) {
      this.marked = true;
    } else {
      this.marked = false;
    }
  }
  saveQuickWorkOrder() {
    debugger;
    this.wot = - 1;
    this.startDT = this.convert_DT(new Date());
    var d = new Date();
    var datetext = d.toTimeString();
    datetext = datetext.split(' ')[0];
    this.workTime = datetext;
    this.is_BarcodeRequired = 0;
    var facilityString;
    if(!this.EmployeeKey)
    {
      alert("select an employee!");
    }
    else if (!this.FacilityKey) {
      alert("Building is not provided !");
    } else
    if (!this.WorkorderNotes) {
      alert("Work Order Notes is not provided !");
    } 
    else {
      this.notes = this.WorkorderNotes;
      facilityString = this.FacilityKey;
      if (this.EmployeeKey) {
        this.emp_key = this.EmployeeKey;
      } else {
        this.emp_key = - 1;
      }

      if (this.PriorityKey) {
        this.priority = this.PriorityKey;
      } else {
        this.priority = - 1;
      }

      if (this.isPhotoRequired) {
        this.is_PhotoRequired = 1;
      } else {
        this.is_PhotoRequired = 0;
      }
      this.createworkorder = {
        workorderkey: - 99,
        workordertypekey: - 1,
        equipmentkey: - 1,
        roomkeys: '-1',
        facilitykeys: facilityString,
        floorkeys: '-1',
        zonekeys: '-1',
        roomtypekeys: '-1',
        employeekey: this.emp_key,
        priority: this.priority,
        fromdate: this.startDT,
        todate: this.startDT,
        intervaltype: '0',
        repeatinterval: 1,
        occursonday: null,
        occursontime: this.workTime,
        occurstype: null,
        workordernote: this.notes,
        isbar: this.is_BarcodeRequired,
        isphoto: this.is_PhotoRequired,
        metaupdatedby: this.employeekey,
        OrganizationID: this.OrganizationID
      };
     
      this.WorkOrderServiceService
        .addQuickWorkOrder(this.createworkorder)
        .subscribe(res => {
          
          alert("work-order created successfully");
          this.router.navigateByUrl('/viewWorkOrderSupervisor');
        });
    }
  }

  ngOnInit() {
    var token = localStorage.getItem('token');
    var encodedProfile = token.split('.')[1];
    var profile = JSON.parse(this.url_base64_decode(encodedProfile));
    this.role = profile.role;
    this.IsSupervisor = profile.IsSupervisor;
    this.name = profile.username;
    this.employeekey = profile.employeekey;
    this.OrganizationID = profile.OrganizationID;

    this.WorkOrderServiceService
      .getallEmployee(this.employeekey, this.OrganizationID)
      .subscribe((data: any[]) => {
        this.EmployeeOption = data;
      });
    this.WorkOrderServiceService
      .getallFacility(this.employeekey, this.OrganizationID)
      .subscribe((data: any[]) => {
        this.facilitylist = data;
      });
    this.WorkOrderServiceService
      .getallPriority(this.OrganizationID)
      .subscribe((data: any[]) => {
        this.prioritylist = data;
      });
  }

}
