import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

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
      public router: Router
  ) { }

  ngOnInit() {
  }
  onSubmitLogin(){
    this.authService.loginEmail(this.email, this.password)
    .then( (res) =>{
      this.router.navigate(['/logged']);
      console.log("Registro Exitoso");

    }).catch((err)=>{
      console.log(err);
    });
  }
}
