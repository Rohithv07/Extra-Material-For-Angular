import { Component, OnInit } from '@angular/core';
import { Employee } from '../interfaces/employee';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {

  employee: Employee = {
    id: 3,
    name: "john",
    salary: 10000,
    permanent: true,
    department: {
      id: 1,
      name: "Payroll"
    },
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

  constructor() { }

  ngOnInit(): void {
  }

}
