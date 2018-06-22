import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: any;
  state = '';

  constructor(public afAuth: AngularFireAuth, private router: Router) {
  }

  ngOnInit() {
    this.afAuth.user.subscribe(user => {
      if (user) {
        if (user.displayName) {
          this.name = user.displayName;
        } else {
          this.name = user.email;
        }
      }
    });
  }

}
