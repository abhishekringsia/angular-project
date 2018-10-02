import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'cm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private httpService: HttpClient) { }
  tractors: string[];

  ngOnInit() {

    this.httpService.get('./assets/vehicle.json').subscribe(
      data => {
        this.tractors = data as string[];	 
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

  onClickMe(id: string) {
    console.log("Clicked item is :");
    console.log(id);
  }
}