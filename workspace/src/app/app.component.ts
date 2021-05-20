import { Component } from '@angular/core';
import { EmployeeDepartment } from './employee-department-class';

import { EmployeeDetails } from './employee-details-class';
import { EmployeeSkill } from './employee-skill-class';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workspace';
  favoriteMovieName = 'Interstellar';
  employee: EmployeeDetails = {
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
  };



}
