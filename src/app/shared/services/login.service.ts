import { Injectable } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Users } from '../models/users.model';
import { RegistroService } from './registro.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  formLogin : FormGroup;

  public users: Users[] = [];

  constructor(private formBuilder: FormBuilder,
     private registroService : RegistroService,
     private router : Router) { 

    this.formLogin = this.formBuilder.group({
      nome:['', Validators.required],
      senha:['',Validators.required]

  });
  }
  refresh(){
    this.users = JSON.parse(localStorage.getItem("users") || '[]');
    console.log(this.users);
  }
 
  validator(){
    
      
      
    if(this.users.length>0){

      console.log(this.users);
      
      for(var i =0; i < this.users.length; i++) {
        

      

       if(this.users[i]['nome']== this.formLogin.value.nome &&
        this.users[i]['senha'] == this.formLogin.value.senha){
          
           

           

           

           this.router.navigate(['/homepage']);
           
       
       }
       
      }
                   
      
    }if(this.users[0]['nome'] != this.formLogin.value.nome &&
    this.users[0]['senha'] != this.formLogin.value.senha){
    alert("usuário não existe");
    }
  }
}
