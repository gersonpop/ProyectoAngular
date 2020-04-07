import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
      public authService: AuthService,
      public router: Router,
      public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSubmitLogin(){
    this.authService.loginEmail(this.email, this.password)
    .then( (res) =>{
      this.flashMensaje.show('Bienvenido',
      {cssClass: 'alert-success', timeout:4000});
      this.router.navigate(['']);
      console.log("ingreso Exitoso");

    }).catch((err)=>{
      this.flashMensaje.show(err.message,
      {cssClass: 'alert-danger', timeout:4000});
      console.log(err);
    });
  }
  onClickGoogle(){
    this.authService.loginGoogle()
    .then( (res) =>{
      this.flashMensaje.show('Bienvenido',
      {cssClass: 'alert-success', timeout:4000});
      this.router.navigate(['/logged']);
      console.log("ingreso Exitoso");

    }).catch((err)=>{
      this.flashMensaje.show(err.message,
      {cssClass: 'alert-danger', timeout:4000});
      console.log(err);
    });
  }
  onClickFacebook(){
    this.authService.loginFacebook()
    .then( (res) =>{
      this.flashMensaje.show('Bienvenido',
      {cssClass: 'alert-success', timeout:4000});
      this.router.navigate(['/logged']);
      console.log("ingreso Exitoso");

    }).catch((err)=>{
      this.flashMensaje.show(err.message,
      {cssClass: 'alert-danger', timeout:4000});
      console.log(err);
    });
  }
  onClickTwitter(){
    this.authService.loginTwitter()
    .then( (res) =>{
      this.flashMensaje.show('Bienvenido',
      {cssClass: 'alert-success', timeout:4000});
      this.router.navigate(['/logged']);
      console.log("ingreso Exitoso");

    }).catch((err)=>{
      this.flashMensaje.show(err.message,
      {cssClass: 'alert-danger', timeout:4000});
      console.log(err);
    });
  }

}
