import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeDepartment } from '../employee-department-class';
import { EmployeeDetails } from '../employee-details-interface';
import { EmployeeSkill } from '../employee-skill-class';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit, OnDestroy {
  @Input()
  employee: EmployeeDetails =
    {
      id: 1,
      name: 'Mohan',
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

    subscription! : Subscription;


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.route.queryParams.subscribe(params => {
      this.employee.name = params['id'];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
