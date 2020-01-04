import { Component } from '@angular/core';

@Component({
    selector:'list-temp',
    templateUrl:'list.component.html'
})

export class ListComponent{
    list: any[]=[];
    getEmployeeDetails(): void{
        this.list =  [
            {
                name:'aks getEmployees'
            },
            {
                name:'bks getEmployees'
            }
        ]
    }
}