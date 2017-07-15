import { Component, OnInit } from '@angular/core';

import { DepartmentsService } from './../departments/departments.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styles: []
})
export class StatsComponent implements OnInit {

  public stats;
  constructor(private departmentsService: DepartmentsService) { }

  ngOnInit() {
    this.departmentsService.departmentsStats().subscribe(res => {
      let allDepartments;
      this.departmentsService.getAllDepartments().subscribe(deps => {
        allDepartments = deps;
        this.stats = res.map(stat => {
          stat.departmentName = allDepartments.find(dep => dep.id === stat._id).name;
          return stat;
        });
        console.log(this.stats.length)
      });


    });
  }

}
