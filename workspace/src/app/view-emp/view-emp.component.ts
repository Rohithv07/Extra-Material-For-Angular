import { Component, OnInit } from '@angular/core';

import { EmployeeDetails } from './../employee-details-interface';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})

export class ViewEmpComponent implements OnInit {

  title = 'workspace';
  favoriteMovieName = 'Interstellar';
  employee: EmployeeDetails = {
    id: 3,
    name: 'John',
    salary: 10000,
    permanent: false,
    departments: [
      {departmentId: 1, departmentName: 'Payroll'}
    ],
    skills: [
      {skillId: 1, skillName: 'HTML'},
      {skillId: 2, skillName: 'CSS'},
      {skillId: 3, skillName: 'Javscript'}
    ],
    dateOfBirth: new Date('2019/04/20')
  };


  constructor() { }

  ngOnInit(): void {
  }

}
