import { Injectable } from "@angular/core";
import * as Firebase from "firebase";
import { Router } from '@angular/router';

@Injectable()
export class AuthService{

    token: string;

    constructor(private router: Router){}

    SignUpUser(email: string, password: string){
        Firebase.auth().createUserWithEmailAndPassword(email, password).catch(
            error=> console.log(error)
        )
    }

    SignInUser(email: string, password: string){
        Firebase.auth().signInWithEmailAndPassword(email, password).then(
            response => {
                //this.router.navigate(['/']);
                Firebase.auth().currentUser.getIdToken().then(
                    (token:string)=> {
                        this.token = token;
                        console.log(this.token);
                    }
                )
            }
        ).catch(
            error=> console.log(error)
        )
    }
}