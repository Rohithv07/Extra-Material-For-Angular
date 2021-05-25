import { Injectable } from '@angular/core';
import { EmployeeDepartment } from './employee-department-class';
import { EmployeeDetails } from './employee-details-interface';
import { EmployeeSkill } from './employee-skill-class';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee: EmployeeDetails[] = [
    {
      id: 3,
      name: 'John',
      salary: 10000,
      permanent: false,
      departments: [
        new EmployeeDepartment(1, 'Payroll')
      ],
      skills: [
        new EmployeeSkill(1, 'HTML'),
        new EmployeeSkill(2, 'CSS'),
        new EmployeeSkill(3, 'Javascript')
      ],
      dateOfBirth: new Date('2019/04/20')
    },
    {
      id: 2,
      name: 'Smith',
      salary: 5000,
      permanent: false,
      departments: [
        new EmployeeDepartment(1, 'Payroll')
      ],
      skills: [
        new EmployeeSkill(1, 'HTML'),
        new EmployeeSkill(2, 'CSS'),
        new EmployeeSkill(3, 'Javascript')
      ],
      dateOfBirth: new Date('2019/04/20')
    },
    {
      id: 1,
      name: 'Mary',
      salary: 2000,
      permanent: false,
      departments: [
        new EmployeeDepartment(1, 'Payroll')
      ],
      skills: [
        new EmployeeSkill(1, 'HTML'),
        new EmployeeSkill(2, 'CSS'),
        new EmployeeSkill(3, 'Javascript')
      ],
      dateOfBirth: new Date('2019/04/20')
    }

  ];
  constructor() { }

  getAllEmployees(): EmployeeDetails[] {
    return this.employee;
  }

  getEmployee(employeeId: any) {
    for (let emp of this.employee) {
      if (emp.id === employeeId)
        return emp;
      }
      return null;
  }
}
