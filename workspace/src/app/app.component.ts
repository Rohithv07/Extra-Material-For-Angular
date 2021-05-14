import { Component } from '@angular/core';

import { EmployeeDetails } from './employee-details-interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements EmployeeDetails{
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

}
