import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeDetails } from '../employee-details-interface';

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
      {departmentId: 1, departmentName: 'Payroll'},
      {departmentId: 2, departmentName: 'Internal'},
      {departmentId: 3, departmentName: 'HR'}
    ],
    skills: [
      {skillId: 1, skillName: 'HTML'},
      {skillId: 2, skillName: 'CSS'},
      {skillId: 3, skillName: 'Javscript'}
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
