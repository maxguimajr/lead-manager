import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin : FormGroup

  constructor(private loginService:LoginService, private formBuilder: FormBuilder) {

    this.formLogin = this.loginService.formLogin;
   }

   valid(){
     
    this.loginService.validator();

  }

  ngOnInit(): void {
    this.loginService.refresh();
  }

 

}
