import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { UserDetails } from './user-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subOptions = ['Basic', 'Advanced', 'Pro'];
  templateForm = new UserDetails('mail@mail.com', this.subOptions[1], 'password');
  submitted = false;

  onSubmit(templateForm) {
    this.submitted = true;
    console.log(templateForm.value);
  }
}
