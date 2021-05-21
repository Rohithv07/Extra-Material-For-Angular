import { Component,  OnInit } from '@angular/core';
import { FormArray, FormBuilder, NgForm, Validators } from '@angular/forms';
import { EmployeeDepartment } from '../employee-department-class';


@Component({
  selector: 'app-edit-emp-form-builder',
  templateUrl: './edit-emp-form-builder.component.html',
  styleUrls: ['./edit-emp-form-builder.component.css']
})
export class EditEmpFormBuilderComponent implements OnInit {

  /**
   * Using some default values and may be different from other component
   */


  department = [
    new EmployeeDepartment(1, 'Payroll'),
    new EmployeeDepartment(2, 'Internal'),
    new EmployeeDepartment(3, 'HR')
  ]

  employeeDetails = this.fb.group({
    employeeName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
    department: [null, [Validators.required]],
    skills: this.fb.array([
      this.fb.control('')
    ])
  });
  constructor(private fb: FormBuilder) {

  }

  get skills() {
    return this.employeeDetails.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  onSubmit(f: NgForm) {
    console.log(f);
  }

  ngOnInit(): void {
  }

}
