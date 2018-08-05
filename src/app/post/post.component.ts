import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


import {  FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
;
import { Validators } from '@angular/forms';
@Component({
  selector: 'cm-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  Form: FormGroup;
  OnFileSelected(event){
    console.log(event)
  }
  
  constructor(){}
    
  
  ngOnInit() {
    
    this.Form = new FormGroup({
      'Title': new FormControl(""),
      'Description': new FormControl(""),
      'Photos': new FormControl(""),
      'Name': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'Mobile': new FormControl(""),
      'Email': new FormControl(""),
      

  });
    
  }
  onSubmit(){
    console.log(this.Form.value);
    console.log("Name :" , this.Form.value.Name);
  }
}