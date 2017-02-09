import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AjaxService{
    constructor(private http:Http){
    }

    createUser(){
        
        var headers= new Headers();
        headers.append('Content-type','application/x-www-form-urlencoded');
        return this.http.get('https://www.newsfeedsmartapps.com/test/tata_motors/mobile/webservice.php?operation=createUser',{headers:headers})
        .map(res => res.json());
    }

    counter(name:string,data){
            var headers= new Headers();
        headers.append('Content-type','application/x-www-form-urlencoded');
        return this.http.post('https://www.newsfeedsmartapps.com/test/tata_motors/mobile/webservice.php?operation='+name,data,{headers:headers})
        .map(res => res.json());
    }

    register(data){
        var headers= new Headers();
        headers.append('Content-type','application/x-www-form-urlencoded');
        return this.http.post('https://www.newsfeedsmartapps.com/test/tata_motors/mobile/webservice.php?operation=register',data,{headers:headers})
        .map(res => res.json());
    }

    

}