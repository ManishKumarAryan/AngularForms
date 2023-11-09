import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';

  formData={
    email:'',
    password :'',
    options :{
      option1 : false,
      option2 : false,
    },
    radio : '',
  };

  submittedData : any;
  submitForm(data: any){
    this.submittedData = data;
  }
}
