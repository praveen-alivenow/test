import { Component, OnInit  } from '@angular/core';
import { Http } from '@angular/http';
import { AjaxService }    from '../ajaxServices';

@Component({
    moduleId: module.id,
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  providers: [AjaxService]
})


export class Page1Component implements OnInit {
   userid:number;

  constructor(private ajaxservice: AjaxService) { 
       if(!this.userid){
        ajaxservice.createUser()
                    .subscribe(data =>{
                    this.userid=data.userid;
                                });
                        }
  }
  
  ngOnInit() {
  }

clickCount(name:string){
  var postData = "user_id=" + this.userid;
  this.ajaxservice.counter(name,postData).subscribe();
}
  
            
  }
