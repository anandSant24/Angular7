import { Component } from "@angular/core";
import { EmployeeService } from './employee.service';
import { IEmployee } from "./employee";
import { OnInit } from '@angular/core';

@Component({
  selector: "create-employee",
  templateUrl: "./createEmployee.component.html",
  providers: [EmployeeService]
  
})
export class CreateEmployeeComponent implements OnInit{
  employees: IEmployee[];
  
  constructor(private _empSvc: EmployeeService){
  }

  ngOnInit(){
    this.employees = this._empSvc.getEmployeesData();
  }
  selectedRadioBtn: string = "all";
  getMessageFromChild(selected: string) {
    console.log(selected)
    this.selectedRadioBtn = selected;
  }
  getAllEmp(): number {
    return this.employees.length;
  }
  getMale(): number {
    return this.employees.filter(e => e.gender.toLowerCase() === "m").length;
  }
  getFemale(): number {
    return this.employees.filter(e => e.gender.toLowerCase() === "f").length;
  }
  title = "CodeSandbox";

  // employees: 
  // [
  //   {
  //     empCode: "emp101",
  //     name: "Tom",
  //     gender: "m",
  //     annualSalary: 5000,
  //     dateOfBirth: "05/06/1988"
  //   },
  //   {
  //     empCode: "emp102",
  //     name: "Alex",
  //     gender: "m",
  //     annualSalary: 5900,
  //     dateOfBirth: "06/25/1990"
  //   },
  //   {
  //     empCode: "emp103",
  //     name: "Mike",
  //     gender: "m",
  //     annualSalary: 5500,
  //     dateOfBirth: "12/06/1986"
  //   },
  //   {
  //     empCode: "emp104",
  //     name: "Mary",
  //     gender: "f",
  //     annualSalary: 6000,
  //     dateOfBirth: "09/06/1980"
  //   }
  // ];
}
