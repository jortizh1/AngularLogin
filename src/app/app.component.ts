import { Component, OnInit } from '@angular/core';
import * as Firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Login';

  ngOnInit() {
    
    Firebase.initializeApp({      
      apiKey: "AIzaSyA_m3LcyMH5oMcZlWc-zm6YY-Fq4RE44rQ",
      authDomain: "http-134a2.firebaseapp.com"
    })

  }
}