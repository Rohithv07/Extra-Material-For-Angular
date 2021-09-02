import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../interfaces/department';
import { Employee } from '../interfaces/employee';

@Component({
  selector: 'app-edit-emp-template-driven',
  templateUrl: './edit-emp-template-driven.component.html',
  styleUrls: ['./edit-emp-template-driven.component.css']
})
export class EditEmpTemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedDepartment!: Department;
  employee: Employee = {
    id: 3,
    name: "john",
    salary: 10000,
    permanent: true,
    department: [{
      id: 1,
      name: "Payroll"
    },
    {
      id: 2,
      name: "Internal"
    },
  {
    id: 3,
      name: "HR"
  }],
    skills: [
      {
      id: 1,
      name: "HTML"
    },
    {
      id: 2,
      name: "CSS"
    },
    {
      id: 3,
      name: "Javascript"
    }
  ],
  dob: new Date('12/31/2000')
  };

  onSubmit(empForm: NgForm) {
    console.log(empForm);
  }

}
