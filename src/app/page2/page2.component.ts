import { Component, OnInit  } from '@angular/core';
import { AjaxService }    from '../ajaxServices';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  providers: [AjaxService]
})
export class Page2Component implements OnInit {
userid:number;
  private sub: any;

  constructor(private ajaxservice: AjaxService,private route: ActivatedRoute) { 
     
  }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
       this.userid = +params['id'];
       });
  }

clickCount(name:string){
  var postData = "user_id=" + this.userid;
  this.ajaxservice.counter(name,postData).subscribe();
}

}
