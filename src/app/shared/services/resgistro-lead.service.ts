import { Injectable } from '@angular/core';
import { Leads } from 'src/app/shared/models/leads.model';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResgistroLeadService {

  formLeads : FormGroup;

  public leads: Leads[] = [];

  constructor(private formBuilder: FormBuilder, private router : Router) {
    this.formLeads = this.formBuilder.group({
      id:[],
      nome:['', Validators.required],
      telefone:['',Validators.required],
      email:['',Validators.required],
      status:[1,Validators.required],
    
      
     });

   }
   
   test(){ 

    if(this.formLeads.valid){

     var milesecound = new Date().getMilliseconds();

     this.formLeads.value.id = milesecound;
      
    
    
    this.leads.push(this.formLeads.value);
    

    console.log(this.leads);

    const data = JSON.stringify(this.leads);
    localStorage.setItem('leads', data);

    this.router.navigate(['/homepage']);
    }
   }
   refresh(){
    this.leads = JSON.parse(localStorage.getItem("leads") || '[]');
    console.log(this.leads);

  }
}