import { Component, OnInit, Input } from '@angular/core';
import { EmployeesService } from './employees.service';
import { Employee } from './../models/employee';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styles: []
})
export class AllEmployeesComponent implements OnInit {

  @Input() allEmployees: [Employee];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
  }

}
