import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../interfaces/employee';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.employee.name=params['name']
    })
  }

  @Input()
  employee: Employee = {
    id: 1,
    name: 'Mohan',
    salary: 10000,
    permanent: false,
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

}
