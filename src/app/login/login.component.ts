import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalService } from '../local-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form1 = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
  });
  get f(){
    return this.form1.controls;
  }
  username: string = '';
  password: string = '';
  constructor(private localService: LocalService) { }

  login() {
    const username = this.localService.getData('username');
    const password = this.localService.getData('password');
    //console.log(username);
    const user = JSON.stringify(this.form1.value.username);
    const pass = JSON.stringify(this.form1.value.password);
    if(username===user && password===pass){
      alert("Login Successful");
      window.location.href = 'home';
    }
    else{
      alert("Login Failed");
    }
  }
}
