import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs";

import { Department } from './../models/department';

@Injectable()
export class DepartmentsService {

  private allDepartments: [Department];

  constructor(private http: Http) { }

  public getAllDepartments(): Observable<[Department]> {

    if (this.allDepartments) return Observable.of(this.allDepartments);

    return this.http.get("/api/departments").map(res => {
      const jsonDeparts = res.json();
      const departments = (jsonDeparts as any).map(dep => new Department(dep.name, dep.id));
      return departments;
    });
  }

  public addDepartment(department): Observable<Department> {
    return this.http.post("/api/addDepartment", department).map(res => {
      const newDepartment = new Department(res.json().name, res.json().id);
      if (this.allDepartments) this.allDepartments.push(newDepartment);
      return newDepartment;
    });
  }

  public departmentsStats(): Observable<any> {
    return this.http.get("/api/stats").map(res => res.json())
  }
}
