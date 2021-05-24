import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDetails } from '../employee-details-interface';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent implements OnInit {
  empForm!: FormGroup;
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
  // name = new FormControl(this.employee.name);
  // departments = new FormControl(this.employee.departments);


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.empForm = new FormGroup({
      'name': new FormControl(this.employee.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      'departments': new FormControl(this.employee.departments, [
        Validators.required
      ])
    });

    const employeeId = this.route.snapshot.paramMap.get('id');
    console.log(employeeId);
  }

  get names() {
    return this.empForm.get('name');
  }

  get department() {
    return this.empForm.get('departments');
  }

  onSubmit(f: NgForm) {
    console.log(f);
  }


}
