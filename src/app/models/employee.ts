export class Employee {

    public name: string;
    public department: string;
    public salary: number;
    public id: string;
    public departmentName: string;
    
    constructor(name: string, departmentId: string, salary: number, id?: string) {
        this.name = name;
        this.department = departmentId;
        this.salary = salary;
        this.id = id;
    }
}