import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeDepartment } from '../employee-department-class';
import { EmployeeDetails } from '../employee-details-interface';
import { EmployeeSkill } from '../employee-skill-class';

@Component({
  selector: 'app-edit-emp-template-driven',
  templateUrl: './edit-emp-template-driven.component.html',
  styleUrls: ['./edit-emp-template-driven.component.css']
})
export class EditEmpTemplateDrivenComponent implements OnInit {

  employee: EmployeeDetails = {
    id: 3,
    name: 'John',
    salary: 10000,
    permanent: false,
    departments: [
      new EmployeeDepartment(1, 'Payroll'),
      new EmployeeDepartment(2, 'Internal'),
      new EmployeeDepartment(3, 'HR')
    ],
    skills: [
      new EmployeeSkill(1, 'HTML'),
      new EmployeeSkill(2, 'CSS'),
      new EmployeeSkill(3, 'Javascript')
    ],
    dateOfBirth: new Date('2019/04/20')
  };
  defaultDepartment: string = "Payroll";
  constructor() { }


  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f);
  }

}
