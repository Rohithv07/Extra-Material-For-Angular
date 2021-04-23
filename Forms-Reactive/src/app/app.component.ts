import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUsernames = ['Priya', 'Krishna'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
  	this.signUpForm = new FormGroup({
  		'userData': new FormGroup({
  			'username': new FormControl('rohith', [Validators.required, this.forbiddenNames.bind(this)]),
  			'email': new FormControl('abc@gmail.com', [Validators.required, Validators.email], this.forbiddenEmails)
  		}),
  		'gender': new FormControl('male'),
  		'hobbies': new FormArray([])
  	});
  	// this.signUpForm.valueChanges.subscribe(
  	// 		(value) => {console.log(value)}
  	// 	)
  	this.signUpForm.statusChanges.subscribe((status) => {
  		console.log(status);
  	});
  	this.signUpForm.setValue({
  		'userData': {
  			'username': 'Bane',
  			'email': 'bane@gmail.com'
  		},
  		'gender': 'male',
  		'hobbies': []
  	})
  }

  onSubmit() {
  	console.log(this.signUpForm);
  	this.signUpForm.reset();
  }

  // onAddHobby() {
  //  	 const control = new FormControl(null, Validators.required);
  //  	 (<FormArray>this.signUpForm.get('hobbies')).push(control);
  //  }

  // get controls() {
  //  	return (this.signUpForm.get('hobbies') as FormArray).controls;
  //  } // this code have error in the console
   
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
  	if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
  		return {'nameIsForbidden': true};
  	}
  	return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
  	const promise = new Promise<any>((resolve, reject) => {
  		setTimeout(() => {
  			if (control.value === 'test@test.com') {
  				resolve({'emailIsForbidden': true});
  			}
  			else {
  				resolve(null);
  			}
  		}, 1500)
  	});
  	return promise;
  }
}
