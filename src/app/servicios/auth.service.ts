import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) {  }
loginGoogle(){
  return this.afAuth.auth.signInWithPopup(
    new firebase.auth.GoogleAuthProvider()
  );
}
loginFacebook(){
  return this.afAuth.auth.signInWithPopup(
    new firebase.auth.FacebookAuthProvider()
  );
}
loginTwitter(){
  return this.afAuth.auth.signInWithPopup(
    new firebase.auth.TwitterAuthProvider()
  );
}

  registerUser( email: string, pass: string){
    return new Promise((resolve, reject)=>{
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
      err =>reject(err));
    })
  }

  loginEmail(email: string, pass: string){
    return new Promise((resolve, reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
      err =>reject(err));
    })
  }

  getAuth(){
    return this.afAuth.authState.map (auth => auth);
  }

  logout(){
    return this.afAuth.auth.signOut();
  }
  isAuth(){
    return this.afAuth.authState.map( auth => auth);
  }
}
