import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';
import { LoggedComponent } from './componentes/logged/logged.component';
import { ErrorPageComponent } from './componentes/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    LoggedComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
