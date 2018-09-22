import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(myform: NgForm){
    const email = myform.value.email;
    const password = myform.value.password;

    this.authService.SignInUser(email, password);
  }
}