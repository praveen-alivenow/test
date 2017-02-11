import { Component, OnInit } from '@angular/core';
import { Http }    from '@angular/http';
import { AjaxService }    from './ajaxServices';
// import {Data}     from './data';

@Component({
    moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AjaxService]
})
export class AppComponent {
  
 userid:number;

  constructor(private ajaxservice: AjaxService) { 

  }
  
  
          
}
