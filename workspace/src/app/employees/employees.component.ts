import { Component, OnInit } from '@angular/core';
import { EmployeeDepartment } from '../employee-department-class';
import { EmployeeDetails } from '../employee-details-interface';
import { EmployeeSkill } from '../employee-skill-class';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  searchKey: string = '';

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

  ngOnInit(): void {
  }

}
