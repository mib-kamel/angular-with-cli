import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './tpls/header.component';
import { AddDepartmentComponent } from './departments/add-department.component';
import { AllDepartmentsComponent } from './departments/all-departments.component';
import { AddEmployeeComponent } from './employees/add-employee.component';
import { AllEmployeesComponent } from './employees/all-employees.component';
import { DepartmentsService } from './departments/departments.service';
import { EmployeesService } from './employees/employees.service';
import { HomePageComponent } from './home-page.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddDepartmentComponent,
    AllDepartmentsComponent,
    AddEmployeeComponent,
    AllEmployeesComponent,
    HomePageComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DepartmentsService, EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
