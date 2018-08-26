import { Component , OnInit} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'cm-app-component',
  templateUrl: './app.component.html',
  providers:[AppService]
})
export class AppComponent implements OnInit{

  constructor(private service: AppService) { }
ngOnInit(){
this.service.getdata().subscribe(
datas => datas.json().forEach(element => {
  console.log("data "+ JSON.stringify(element));
})

);
}
}
