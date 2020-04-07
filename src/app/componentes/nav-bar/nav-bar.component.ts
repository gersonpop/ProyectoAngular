import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public isLogin: boolean;
  public isAdmin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  public fotoUsuario: string;

 constructor(
    public authService: AuthService
  ){}

  ngOnInit() {
    this.isAdmin=false;
    this.authService.getAuth().subscribe( auth =>{
      if(auth){
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        if(auth.displayName=="Gerson Rodrigo Porras"){
          this.isAdmin=true;
        }
        this.emailUsuario = auth.email;
        this.fotoUsuario = auth.photoURL;
        console.log(this.nombreUsuario +"la fotico es" + this.fotoUsuario)

      }
    })
  }

  onClickLogout(){
    this.authService.logout();
  }
}
