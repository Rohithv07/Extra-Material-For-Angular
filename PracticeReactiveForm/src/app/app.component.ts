import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectNameValidator } from './projectname-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projectStatus = ['Stable', 'Critical', 'Finished']

  contactForm = new FormGroup({
    projectName: new FormControl('', [Validators.required, ProjectNameValidator.invalidProjectName], ProjectNameValidator.asyncInvalidProjectName),
    emailId: new FormControl('', [Validators.required, Validators.email]),
    projectDetails: new FormControl('Critical')
  });

  onSubmit() {
    console.log(this.contactForm.value);
  }

  get projectName() {
    return this.contactForm.get('projectName');
  }

  get emailId() {
    return this.contactForm.get('emailId');
  }

  get projectDetails() {
    return this.contactForm.get('projectDetails');
  }

  ngOnInit(){

  }
}
