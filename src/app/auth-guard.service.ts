import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs';
import {map, take, tap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AngularFireAuth, private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.auth.authState.pipe(
      take(1),
      map((authState) => !!authState),
      tap(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/login']);
        }
      }));;
  }
}
