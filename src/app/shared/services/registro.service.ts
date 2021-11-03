import { Injectable } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroService{
  confirm : boolean = false;

  formRegister : FormGroup;

  public users: Users[] = [];
  
  myPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!></;.<>%+.\%*#?&])[A-Za-z\d@$><;.!%*#?&]{8,}$/;



  constructor(private formBuilder: FormBuilder, private router : Router) { 
    this.formRegister = this.formBuilder.group({
      nome:['', Validators.required],
      senha:['',Validators.compose([ 
        Validators.required, Validators.pattern(this.myPattern)])],
        confirm:['', Validators.required ]
      
     
  }); 
  
  
  }
  valids(){
    if(this.formRegister.value.senha === this.formRegister.value.confirm )
    {
      this.formRegister.get('confirm')!.invalid;
      
    }
  }
  refresh(){
    this.users = JSON.parse(localStorage.getItem("users") || '[]');
    console.log(this.users);

  }
  salvar(){
  
    //Aqui eu valido o formulário
   if(this.formRegister.valid){

    //Formulário validado
    //Validando Usuário

    let bloqueiaGravacao !: boolean ;

    if(this.users.length>0){

      for(var i =0; i < this.users.length; i++) {

      console.log("Objeto",this.users[i]['nome']);
      console.log("Formulario",this.users[i]['nome']);

       if(this.users[i]['nome']== this.formRegister.value.nome){
           console.log("Existe", i);

           bloqueiaGravacao = true;

           alert("Usuário já existe")
       }      
      }
    }

    if(bloqueiaGravacao == true){
      return
    }

    this.users.push(this.formRegister.value);

    //usuário validado não existe usuário
    const data = JSON.stringify(this.users);
    localStorage.setItem('users', data);

    this.router.navigate(['/login']);

    
  }
  }
}
//minimo 8 caracter --> (^.{8,}$)
