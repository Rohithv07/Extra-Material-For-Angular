import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	@ViewChild('f') signUpForm: NgForm;
	defaultQuestion = 'teacher';
	defaultEmail = 'abc@gmail.com';
	defaultUserName = 'Rohith';
	answer = '';
	genders = ['not to say', 'male', 'female'];
	user = {
		username: '',
		email: '',
		secretQuestion: '',
		answer: '',
		gender: ''
	};

	submittedProperty = false;


  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({   - overwrites the full full
    // 	userData: {
    // 		username: suggestedName,
    // 		email: ''
    // 	},
    // 	secret: 'teacher',
    // 	questionAnswer: '',
    // 	gender: 'not to say'
    // })
    this.signUpForm.form.patchValue({   // overwrites only the specified form
    	userData: {
    		username: suggestedName
    	}
    });
  }

  // onSubmit(form: NgForm) {
  // 	console.log(form);
  // }
  onSubmit() {
  	this.submittedProperty = true;
  	this.user.username = this.signUpForm.value.userData.username;
  	this.user.email = this.signUpForm.value.userData.email;
  	this.user.secretQuestion = this.signUpForm.value.secret;
  	this.user.answer = this.signUpForm.value.questionAnswer;
  	this.user.gender = this.signUpForm.value.gender;

  	this.signUpForm.reset();
  }
}
