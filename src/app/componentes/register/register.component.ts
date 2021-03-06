import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages'
import { AngularFireStorage } from "@angular/fire/storage";
import {  finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService,
    public storage: AngularFireStorage,
    public http: HttpClient
) { }
   @ViewChild('imageUser' ) inputimageUser: ElementRef;
  public displayName: string;
  public imageUser: string="no se cargo";
  public profile: string;

  public email: string;
  public password: string;

  uploadPercent: Observable<number>;
  urlImage: Observable<string>;




  ngOnInit() {
  }

  onUpload(e){
    const id= Math.random().toString(32).substring(2);   //genera id unico
    const file = e.target.files[0];
    const filePath = `profileImagen/${id}_${e.target.files[0].name}`;
    const ref= this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();

    }



  onSubmitAddUser(){

    this.imageUser=this.inputimageUser.nativeElement.value;



    this.authService.registerUser(this.email, this.password)
    .then( (res) =>{

      this.authService.isAuth().subscribe(user =>{
        if(user){
          user.updateProfile({
            displayName: this.displayName,
            photoURL: this.imageUser
          }).then(()=>{
            this.router.navigate(['/logged']);
          }).catch((error)=>console.log("error", error)
          )
        }
      })
    }).catch((err)=>{
      this.flashMensaje.show(err.message,
      {cssClass: 'alert-danger', timeout:4000});
      console.log(err);
    });//*/
  }
}
