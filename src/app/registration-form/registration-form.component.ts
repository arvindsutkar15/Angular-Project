import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDeactivate } from '../Guard/exit.guard';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit,IDeactivate {
  RegForm!: FormGroup;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.CreateRegistration();
  }
  CreateRegistration() {
    this.RegForm = this.fb.group({
      "fullName": ['', [Validators.pattern]],
      "Address": ['', [Validators.pattern]],
      "Country": ['', [Validators.pattern]],
      "State": ['', [Validators.pattern]],
      "City": ['', [Validators.pattern]],
      "PinCode": ['', [Validators.pattern]],
      "Code": ['', [Validators.pattern]],
      "PhoneNumber": ['', [Validators.pattern]],
      "Email": ['', [Validators.pattern, Validators.email]],
      "Password": ['', [Validators.pattern]],
      "cnfPassword": ['', [Validators.pattern]]

    })
  }


  save() {
    console.log(this.RegForm.value);
  }

  canExit() {
    if (this.RegForm.dirty) {
      const result = confirm("Are You Sure Exit This Page");
      if (result) {
        return true;
  
      } else {
        return false;
      }
    }
    else {
      return true;
    }
  }
}
