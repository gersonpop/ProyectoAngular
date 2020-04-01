import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
      public authSevice: AuthService,
      public router: Router
  ) { }

  ngOnInit() {
  }
  onSubmitAddUser(){
    this.authSevice.registerUser(this.email, this.password)
    .then( (res) =>{
      this.router.navigate(['/logged']);
      console.log("Registro Exitoso");

    }).catch((err)=>{
      console.log(err);
    });
  }
}
