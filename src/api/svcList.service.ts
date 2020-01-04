import { Injectable } from '@angular/core';

export class SVCListService{
    
    getList():any[]{
        return [
            {
                name:'aks getEmployees'
            },
            {
                name:'bks getEmployees'
            }
        ]
    }
}