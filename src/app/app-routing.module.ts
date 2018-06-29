import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from './auth-guard.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WeatherComponent} from './weather/weather.component';
import {DartComponent} from './dart/dart.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  {path: 'weather', component: WeatherComponent, canActivate: [AuthGuardService]},
  {path: 'dart', component: DartComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
