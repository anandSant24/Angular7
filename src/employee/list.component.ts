import { Component } from '@angular/core';
import { SVCListService } from '../api/svcList.service';
import { OnChanges,SimpleChanges, Input } from '@angular/core';

@Component({
    selector:'list-temp',
    templateUrl:'list.component.html',
    providers: [SVCListService]
})

export class ListComponent implements OnChanges{
    list: any[]=[];
    constructor(private _svclist: SVCListService){

    }
    getEmployeeDetails(): void{
        this.list = this._svclist.getList();
    }
    @Input()
    inputValList

    getChanges():void{

    }
    ngOnChanges(changes: SimpleChanges):void{
        for(let change in changes){
            let update = changes[change];
            console.log(update.currentValue);
            console.log(update.previousValue);
        }
    }
}