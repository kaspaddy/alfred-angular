import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  state = '';
  error: any;
  email: any;
  password: any;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password)
        .then(
          (success) => {
            console.log(success);
            this.router.navigate(['/login']);
          }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        });
    }
  }
}
