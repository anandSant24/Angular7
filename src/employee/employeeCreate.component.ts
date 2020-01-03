import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from "../models/department.model";
@Component({
    templateUrl: 'employeeCreate.component.html',
})

export class EmployeeCreateComponent{
    // female:string = "female";
    isActive= true;
    saveDetails(employeeDetails: NgForm):void{
        console.log(employeeDetails.value);
    }
    department="3"
    departments: Department[] =[
        {id:1, name:"Help Desk"},
        {id:2, name: "HR"},
        {id:3, name: "IT"},
        {id:4, name:"payroll"}
    ];
}