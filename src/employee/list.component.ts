import { Component } from '@angular/core';
import { SVCListService } from '../api/svcList.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
    selector:'list-temp',
    templateUrl:'list.component.html',
    providers: [SVCListService]
})

export class ListComponent {
    list: any[]=[];
    constructor(private _svclist: SVCListService){

    }
    getEmployeeDetails(): void{
        this.list = this._svclist.getList();
    }
}