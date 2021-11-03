import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegistroService } from './shared/services/registro.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginService } from './shared/services/login.service';
import {DragDropModule} from  '@angular/cdk/drag-drop';
import { RegistroLeadComponent } from './components/registro-lead/registro-lead.component';
import { ResgistroLeadService } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    HomePageComponent,
    LoginComponent,
    RegistroLeadComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule

  ],
  providers: [
    RegistroService,
    LoginService,
    ResgistroLeadService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
