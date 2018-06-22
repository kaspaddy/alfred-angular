import {Component, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AngularFireAuth} from 'angularfire2/auth';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('drawer') sidenav: MatSidenav;

  authState: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(public afAuth: AngularFireAuth, private breakpointObserver: BreakpointObserver) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.sidenav.close();
    console.log('logged out');
  }

  ngOnInit(): void {

  }

}
