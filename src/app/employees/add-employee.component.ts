import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { EmployeesService } from './employees.service';

import { Department } from './../models/department';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: []
})

export class AddEmployeeComponent implements OnInit {

  public employeeForm: FormGroup;
  @Input() allDepartments: [Department];
  @Output() employeeAdded = new EventEmitter();

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      'name': new FormControl("", Validators.required),
      'salary': new FormControl("", [Validators.required, Validators.pattern(/^-*[0-9,\.]+$/)]),
      'department': new FormControl("", Validators.required)
    });
  }

  onSubmit() {
    const employee = this.employeeForm.value;
    if (!employee.department) return;
    this.employeesService.addEmployee(employee).subscribe(res => {
      this.employeeAdded.emit(res);
      this.employeeForm.reset();
    });

  }

}
