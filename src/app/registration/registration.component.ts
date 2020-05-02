import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password_confirm: new FormControl(''),
  });


  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log(this.regForm.value)
  }
}
