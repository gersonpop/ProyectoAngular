import { NotificacionService } from './servicios/notificacion.service';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';
import { LoggedComponent } from './componentes/logged/logged.component';
import { ErrorPageComponent } from './componentes/error-page/error-page.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ListaComponent} from './componentes/productos/lista/lista.component';
import { ArticuloComponent} from './componentes/productos/articulo/articulo.component';


import { FlashMessagesModule} from 'angular2-flash-messages';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from "@angular/fire/storage";
import { environment} from '../environments/environment';
import { AuthService} from './servicios/auth.service';
import { CarshopService } from "./servicios/carshop.service";
import { AuthGuard} from './guards/auth.guard';
import { ArticuloService } from "./servicios/articulo.service";
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CompraComponent } from './componentes/home-page/compra/compra.component';
import { ShoppingcarComponent } from './componentes/home-page/shoppingcar/shoppingcar.component';




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
    ProductosComponent,
    ListaComponent,
    ArticuloComponent,
    FilterPipe,
    CompraComponent,
    ShoppingcarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    AngularFireStorageModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,



  ],
  providers: [AuthService, AuthGuard, FlashMessagesService, ArticuloService, HttpClient,CarshopService, NotificacionService ],
  bootstrap: [AppComponent],
  entryComponents:[ArticuloComponent, CompraComponent]
})
export class AppModule { }
