import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(8)]),
    password: new FormControl('', Validators.required),
  });
  get f(){
    return this.form.controls;
  }
  Submit(){
    localStorage.setItem('username', JSON.stringify(this.form.value.username));
    localStorage.setItem('password', JSON.stringify(this.form.value.password));
    alert('Success');
    window.location.href = 'login';
    //console.log(JSON.stringify(this.form.value.username));
  }
}
