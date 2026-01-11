import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TDform';
 
  @ViewChild('SignUpForm')SignUpForm!: NgForm;

geteditObj={
  ModeOfContact : "Phone",
answer: "Dog",
email: "jhon@gmail.com",
isSubscribe: true,
secretquestions: "fevPet",
username: "jhondoe"
}

  MocArr=[
    {
      ContactMode: "Phone", id: 1,
    },
    {
      ContactMode: "Email", id: 2,
    },
  ]

  OnSignUp(){
     if(this.SignUpForm.valid){
         console.log(this.SignUpForm)
         console.log(this.SignUpForm.value)
     }
    
    this.SignUpForm.reset()
  }

  OnEdit(){
     this.SignUpForm.form.patchValue(this.geteditObj)
}
}
