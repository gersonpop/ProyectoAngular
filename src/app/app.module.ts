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
import { ProductosComponent } from './componentes/productos/productos.component';
import { ArticuloComponent} from './componentes/articulo/articulo.component';
import { ListaComponent} from './componentes/productos/lista/lista.component';

import { FlashMessagesModule} from 'angular2-flash-messages';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment} from '../environments/environment';
import { AuthService} from './servicios/auth.service';
import { AuthGuard} from './guards/auth.guard';
import { ArticuloService } from "./servicios/articulo.service";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    LoggedComponent,
    ErrorPageComponent,
    ProductosComponent,
    ArticuloComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  providers: [AuthService, AuthGuard, FlashMessagesService, ArticuloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
