import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Department } from '../interfaces/department';
import { Employee } from '../interfaces/employee';
import { Skill } from '../interfaces/skill';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent implements OnInit {

  constructor() { }
  selectedSkill!: Skill;
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

  empForm!: FormGroup;

  ngOnInit(): void {
    this.empForm = new FormGroup({
      'name': new FormControl(this.employee.name,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ]),
        'salary': new FormControl(this.employee.salary,
          [
            Validators.required
          ]),
        'permanent': new FormControl(this.employee.permanent,
          [
            Validators.required
          ]),
        'department': new FormControl(null,
          [
            Validators.required
          ])
    });
  }

  get name() {
    return this.empForm.get('name');
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
