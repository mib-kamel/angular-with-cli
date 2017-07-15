import { Component, OnInit, Input } from '@angular/core';
import { Department } from './../models/department';

@Component({
  selector: 'app-all-departments',
  templateUrl: './all-departments.component.html',
  styles: []
})
export class AllDepartmentsComponent implements OnInit {

  @Input() allDepartments: [Department];

  constructor() { }

  ngOnInit() {
  }

}
