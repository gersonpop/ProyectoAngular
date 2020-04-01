import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';
import { LoggedComponent } from './componentes/logged/logged.component';
import { ErrorPageComponent } from './componentes/error-page/error-page.component';

import { AngularFireModule} from 'angularfire2'
import { AngularFireAuthModule} from 'angularfire2/auth'

import { environment} from '../environments/environment'
import { AuthService} from './servicios/auth.service'

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
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
