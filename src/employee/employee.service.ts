import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class EmployeeService{

	getEmployeesData(): any[]{
		return[
		    {
		      empCode: "emp101",
		      name: "Tom",
		      gender: "m",
		      annualSalary: 5000,
		      dateOfBirth: "05/06/1988"
		    },
		    {
		      empCode: "emp102",
		      name: "Alex",
		      gender: "m",
		      annualSalary: 5900,
		      dateOfBirth: "06/25/1990"
		    },
		    {
		      empCode: "emp103",
		      name: "Mike",
		      gender: "m",
		      annualSalary: 5500,
		      dateOfBirth: "12/06/1986"
		    },
		    {
		      empCode: "emp104",
		      name: "Mary",
		      gender: "f",
		      annualSalary: 6000,
		      dateOfBirth: "09/06/1980"
		    }
	  	];
	}
}