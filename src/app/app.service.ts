import { Injectable } from '@angular/core';
import { Http, HttpModule  } from '@angular/http';
import { Observable } from 'rxjs';
import { getLocaleDateFormat } from '../../node_modules/@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  

  constructor(private _http: Http) { 
  
}
getdata(){
  return this._http.get('http://pythonapp-env.qc37sv7cgn.us-east-2.elasticbeanstalk.com/ads')
}

}
