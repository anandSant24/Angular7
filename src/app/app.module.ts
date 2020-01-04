import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from '../dashboard/portfolio.component';
import { EmployeeComponent } from '../employee/employee.component';


import { EmployeeDetailComponent } from '../employee/employeeDetail.component';
import { EmployeeChildComponent } from "../employee/employeechild.component";
import { CreateEmployeeComponent } from "../employee/createEmployee.component"
import { SimpleChangesComponent } from "./simpleChanges.component";
import { employeeCreateComponent } from "../employee/create-employye.component";
import { ListComponent } from '../employee/list.component';

let appRoutes: Routes = [
  { path:'create', component: employeeCreateComponent},
  { path: "", redirectTo:"/create", pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent, 
    PortfolioComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    EmployeeChildComponent,
    CreateEmployeeComponent,
    SimpleChangesComponent,
    employeeCreateComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
