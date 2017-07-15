import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs";

import { Employee } from './../models/employee';

@Injectable()
export class EmployeesService {

  constructor(private http: Http) { }

  public getAllEmployees(): Observable<[Employee]> {
    return this.http.get("/api/employee").map(res => {
      const jsonEmployees = res.json();
      const employees = (jsonEmployees as any).map(emp => new Employee(emp.name, emp.department, (emp.salary as number), emp.id));
      return employees;
    });
  }

  public addEmployee(employee): Observable<Employee> {
    return this.http.post("/api/addEmployee", employee).map(res => new Employee(res.json().name, res.json().department, (res.json().salary as number), res.json().id));
  }
}
