import { Component } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'cm-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {

  model = new User('','', '', '');
  selectedFile: File = null;
  submitted = false;
  constructor(private http: HttpClient) { }

  onSubmit() {
    this.submitted = true;
    console.log(this.model.name);
    this.model.id = this.uniqueKey();
    const data = JSON.stringify(this.model);
    console.log("form model"+data);
    

    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);

    const jsondata = {"id":"a92134fb-cd5f-422e-9f87-ec1ca90ad47a","title":"43rr","description":"dfdsfds","name":"dsfdsds"};
    const url = "http://pythonapp-env.qc37sv7cgn.us-east-2.elasticbeanstalk.com/postAd";

    this.http.post(url, this.model, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(event => {
      if (event.type == HttpEventType.UploadProgress) {
        console.log('Upload Progress: ' + Math.round(event.loaded / event.total) * 100 + '%');
      } else if (event.type === HttpEventType.Response) {
        console.log(event);
      }
    });

  }

  OnFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  get diagnostic() { 
    return JSON.stringify(this.model);
   }

   uniqueKey() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
