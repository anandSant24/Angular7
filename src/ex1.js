<!--The content below is only a placeholder and can be replaced.-->

<div>
	<input type="text" [value]='inputValue'/>
	<button (click) = 'addInput()'>Add</button>
	<div *ngFor='let inp1 of resultDisplay'>
		<div>{{inp1}}</div>
	</div>
	
</div>

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  result: any[];

  inputValue:string = 'enter details';
  resultDisplay:string;
  addInput(): void{
   console.log('inside');
    this.result.push(this.inputValue);
  }
}
