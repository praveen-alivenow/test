import { Component, OnInit  } from '@angular/core';
import { AjaxService }    from '../ajaxServices';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  providers: [AjaxService]
})
export class Page3Component implements OnInit {
userid:number;
  private sub: any;
 id = '6q-ynn3UaLw';
  private player;
  private ytEvent;

  constructor(private ajaxservice: AjaxService,private route: ActivatedRoute) {
  }
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
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
