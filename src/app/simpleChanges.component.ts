import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
	// selector: 'simple-component',
	templateUrl: './simpleChanges.component.html'
})

export class SimpleChangesComponent implements OnChanges{
	@Input()
	simpleUserInput: string;
	
	ngOnChanges(changes: SimpleChanges){
		for(let property in changes){
			let change = changes[property];
			console.log(change.previousValue);
			console.log(change.currentValue);
		}
	}
}
