import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent}from './componentes/home-page/home-page.component'
import {LoginComponent}from './componentes/login/login.component'
import {RegisterComponent}from './componentes/register/register.component'
import {LoggedComponent}from './componentes/logged/logged.component'
import {ErrorPageComponent}from './componentes/error-page/error-page.component'
import { AuthGuard} from './guards/auth.guard';


const routes: Routes = [
  {path:'',component: HomePageComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'logged', component: LoggedComponent, canActivate: [AuthGuard]},
  {path:'**',component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
