import { Component } from '@angular/core';

@Component({
	selector: 'employee-details',
	templateUrl: 'employee.component.html'

})

export class EmployeeDetailComponent{
	firstName: string = 'John';
	lastName: string = 'Frank';
	gender: string = 'Male'; 
}