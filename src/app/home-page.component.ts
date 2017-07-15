import { DepartmentsService } from './departments/departments.service';
import { Component, OnInit } from '@angular/core';

import { EmployeesService } from './employees/employees.service';
import { Employee } from './models/employee';
import { Department } from './models/department';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: []
})
export class HomePageComponent implements OnInit {
  public allEmployees: [Employee];
  public allDepartments: [Department];

  constructor(private employeesService: EmployeesService, private departmentsService: DepartmentsService) {

  }

  ngOnInit() {
    this.departmentsService.getAllDepartments().subscribe(res => {
      this.allDepartments = res;
      this.employeesService.getAllEmployees().subscribe((empRes) => {
        this.allEmployees = empRes;
        this.allEmployees.forEach(emp => emp.departmentName = this.allDepartments.find(dep => dep.id === emp.department).name)
      });
    });
  }

  handleDepartmentAdded(department) {
    this.allDepartments.push(department);
  }

  handleEmployeeAdded(employee) {
    employee.departmentName = this.allDepartments.find(dep => dep.id === employee.department).name;
    this.allEmployees.push(employee);
  }
}
