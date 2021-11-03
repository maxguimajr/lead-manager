import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { Leads } from 'src/app/shared/models/leads.model';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResgistroLeadService } from 'src/app/shared/services/resgistro-lead.service';



@Component({
  selector: 'app-registro-lead',
  templateUrl: './registro-lead.component.html',
  styleUrls: ['./registro-lead.component.css']
})
export class RegistroLeadComponent implements OnInit {

  formLeads : FormGroup;

  public leads: Leads[] = [];

  
  
  

  constructor(private formBuilder: FormBuilder, private registroLeadService : ResgistroLeadService) {
   
    this.formLeads = this.registroLeadService.formLeads;
    
  }
    test(){
      this.registroLeadService.test();
    } 

  
  refresh(){
      this.registroLeadService.refresh();
   }

  ngOnInit(): void {
   this.refresh();
  }

}
