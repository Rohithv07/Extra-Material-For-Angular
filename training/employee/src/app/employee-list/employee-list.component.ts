import { Component, OnInit } from '@angular/core';
import { Department } from '../interfaces/department';
import { Employee } from '../interfaces/employee';
import { Skill } from '../interfaces/skill';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  searchKey: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  selectedSkill!: Skill;
  selectedDepartment!: Department;
  employee: Employee[] = [{
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
  },
  {
    id: 4,
    name: "smith",
    salary: 5000,
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
  },
  {
    id: 5,
    name: "mary",
    salary: 5000,
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
  }
];

}
