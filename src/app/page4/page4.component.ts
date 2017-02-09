import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';
import { Router }      from '@angular/router';
import { AjaxService }    from '../ajaxServices';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  providers: [AjaxService]
})
export class Page4Component implements OnInit {
  public user: User;
userid:number;
  private sub: any;

constructor(public router: Router,private ajaxservice: AjaxService,private route: ActivatedRoute) {
  }

  ngOnInit() { 
    this.sub = this.route.params.subscribe(params => {
       this.userid = +params['id'];
       });
    this.user = {
      username: '',
      email: '',
      number: '',
    }
  }

  save(model: User, isValid: boolean) {
    // call API to save customer
    var postData = "user_id=" + this.userid + "&name=" + model.username + "&mobile=" + model.number + "&email=" + model.email;
    var success;
    if(isValid)
    {
      this.ajaxservice.register(postData).subscribe(data =>{
        console.log(data);
        if(data.code==200){
             this.router.navigate(['../page5',this.userid]);
        }
      });
   
    }
    
  }


clickCount(name:string){
  var postData = "user_id=" + this.userid;
  this.ajaxservice.counter(name,postData).subscribe();
}


}