import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  userRegisterForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userRegisterForm = fb.group({
      name: [
        '',
        [Validators.required, Validators.pattern('^([a-zA-Z0-9]{3,15})$')],
      ],
      email: ['', [Validators.required, Validators.email]],
      phoneNumbers: fb.array([
        ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
      ]),
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
          ),
        ],
      ],
      confirmPassword: [
        '',
        [Validators.required, this.passwordMatchValidator.bind(this)],
      ],
      address: fb.group({
        city: [''],
        street: [''],
      }),
    });
  }

  register() {
    console.log(this.userRegisterForm.value);
  }
  get name() {
    return this.userRegisterForm.get('name');
  }
  passwordMatchValidator(
    control: FormControl
  ): { [key: string]: boolean } | null {
    const passwordControl = this.userRegisterForm?.get('password');
    if (passwordControl && control.value !== passwordControl.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  get phones() {
    return this.userRegisterForm.get('phoneNumbers') as FormArray;
  }
  addPhoneNum() {
    if (this.phones.length >= 2) {
      alert('You can have a maximum of 2 phone numbers.');
      return;
    }
    this.phones.push(new FormControl('', [Validators.pattern('^[0-9]{11}$')]));
  }
  removePhoneNum(index: number) {
    if (this.phones.length > 1) {
      this.phones.removeAt(index);
    } else {
      alert('At least one phone number is required.');
    }
  }
}
