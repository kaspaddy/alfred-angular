import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;
  email: any;
  password: any;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.user.subscribe(value => {
      if (value) {
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password)
        .then(
          (success) => {
            console.log(success);
            this.router.navigate(['/dashboard']);
          }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        });
    }
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(
        (success) => {
          this.router.navigate(['/dashboard']);
        }).catch(
      (err) => {
        this.error = err;
      });
  }

}
