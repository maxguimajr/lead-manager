import { Component, ContentChildren, OnInit, ɵsetCurrentInjector } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem,CdkDragEnd } from '@angular/cdk/drag-drop';
import { Leads } from 'src/app/shared/models/leads.model';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
   primary : any = [];
   segundo : any = [];
   terceiro : any = [];

  arr : any =[];

  public leads: Leads [] = [];
  constructor() { }

  ngOnInit(): void {
    this.ramf();
  
  }
  onDrop( num : number ,event: CdkDragDrop<string []>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    } else {

      transferArrayItem(
                        event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);

                        if(num === 1 ){
                          this.arr = this.primary;                         
                        }
                        if(num === 2){
                          this.arr = this.segundo;
                        }
                        if(num === 3){
                          this.arr = this.terceiro;
                        }                        
                    console.log(this.arr);     
                  var promises = new Promise (()=>{
                    this.arr.map(function(nome : any) {

                      console.log('[forEach]', nome);
                      nome.status = num;               
                    })
                  })                      
               var arrVazio = this.primary.concat( this.segundo, this.terceiro);

                const data = JSON.stringify(arrVazio);
                localStorage.setItem('leads', data);
      }     
    } 
    

    
    ramf(){
      this.leads = JSON.parse(localStorage.getItem("leads") || '[]');
      
      this.primary = this.leads.filter(primeiro => (primeiro.status == 1));
      this.segundo = this.leads.filter(segundo => (segundo.status == 2));
      this.terceiro = this.leads.filter(terceiro => (terceiro.status == 3));
  
      
    }
    
  }
