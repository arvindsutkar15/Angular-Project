import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  Login!:FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private log:LoginService){

  }

  ngOnInit(): void {
    this.login();
    console.log(this.Login);
    
  }

  login(){
    this.Login=this.fb.group({
      "userName":['',[Validators.required]],
      "password":['',[Validators.required]]
    })
  }

  save(){
    console.log(this.Login.value);
    this.router.navigate(['/User-List']);
    this.log.isUserLoggedIn();
  }
  

}
