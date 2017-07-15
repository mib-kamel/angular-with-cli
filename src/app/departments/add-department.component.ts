import { DepartmentsService } from './departments.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html'
})
export class AddDepartmentComponent implements OnInit {

  @Output() departmentAdded = new EventEmitter();

  departmentForm: FormGroup;

  constructor(private departmentsService: DepartmentsService) {
  }

  ngOnInit() {
    this.departmentForm = new FormGroup({
      'name': new FormControl("", Validators.required)
    });
  }

  onSubmit() {
    const department = this.departmentForm.value;
    this.departmentsService.addDepartment(department).subscribe(res => {
      this.departmentAdded.emit(res);
      this.departmentForm.reset();
    });
  }

}
