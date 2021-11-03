import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent, LoginComponent, RegistrarComponent } from './components';
import { RegistroLeadComponent } from './components/registro-lead/registro-lead.component';


export const routes: Routes =[
    {
        path:'',
        redirectTo:'/login',
        pathMatch:'full'
    },
    {
        path:'registrar',
        component: RegistrarComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'homepage',
      component: HomePageComponent
    },
    {
      path:'registrolead',
      component: RegistroLeadComponent
    }

];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
      RouterModule
  ]

})
export class AppRoutingModule { }
