import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from '../dashboard/portfolio.component';
import { EmployeeComponent } from '../employee/employee.component';

import { EmployeeDetailComponent } from '../employee/employeeDetail.component';
import { EmployeeChildComponent } from "../employee/employeechild.component";
import { CreateEmployeeComponent } from "../employee/createEmployee.component"
import { SimpleChangesComponent } from "./simpleChanges.component";

@NgModule({
  declarations: [
    AppComponent, 
    PortfolioComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    EmployeeChildComponent,
    CreateEmployeeComponent,
    SimpleChangesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
