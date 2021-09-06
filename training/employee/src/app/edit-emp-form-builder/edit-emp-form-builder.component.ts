import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Department } from '../interfaces/department';
import { Employee } from '../interfaces/employee';
import { Skill } from '../interfaces/skill';

@Component({
  selector: 'app-edit-emp-form-builder',
  templateUrl: './edit-emp-form-builder.component.html',
  styleUrls: ['./edit-emp-form-builder.component.css']
})
export class EditEmpFormBuilderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

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

  employeeDetails = this.fb.group({
    name: [this.employee.name, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
    salary: [this.employee.salary, [Validators.required]],
    permanent: [this.employee.permanent, [Validators.required]],
    department: [null, [Validators.required]],
    skills: this.fb.array([
      this.fb.control('')
    ])
  });

  get skills() {
    return this.employeeDetails.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  onSubmit(f: NgForm) {
    //this.skills.removeAt(this.skills.length - 1);
    console.log(f);
  }

}
