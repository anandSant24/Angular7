import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "employee-child",
  templateUrl: "employeechild.component.html"
})

export class EmployeeChildComponent {
  
  selecteBtnValue: string = "all";

  @Output()
  radioBtn: EventEmitter<string> = new EventEmitter<string>();

  radioSelected() {
    console.log(this.selecteBtnValue);
    this.radioBtn.emit(this.selecteBtnValue);
  }

  @Input()
  all: number;

  @Input()
  male: number;

  @Input()
  female: number;
}
