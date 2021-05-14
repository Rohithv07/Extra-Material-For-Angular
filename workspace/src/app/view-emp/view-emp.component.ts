import { Component, OnInit } from '@angular/core';

import { EmployeeDetails } from './../employee-details-interface';
@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit, EmployeeDetails {

  title = 'workspace';
  favoriteMovieName = 'Interstellar';
  id = 3;
  name = 'John';
  salary = 10000;
  permanent = true;
  departmentName = 'Payroll';
  departmentId = 1;
  skills = ['HTML', 'CSS', 'Javascript'];
  dateOfBirth = new Date('12/31/2000');


  constructor() { }

  ngOnInit(): void {
  }

}
