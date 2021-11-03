
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";

import { RegistroService } from 'src/app/shared/services/registro.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  formRegister: FormGroup


  constructor(private registroService: RegistroService, private formBuilder: FormBuilder ) {

    this.formRegister = this.registroService.formRegister;
  }

  salvar(){
    this.registroService.salvar();
  }

  ngOnInit(): void {

    this.registroService.refresh();
    
  }

}
