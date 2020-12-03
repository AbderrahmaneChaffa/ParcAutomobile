import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
username : string ="";
password : string ="";
logindata:any ={};

  constructor(
    private router:Router,
    public navCtrl: NavController,
    public http:HttpClient,
    public toastController: ToastController,
    private storage: Storage
  ) {
    
   /* storage.get('iduser').then((val) => {
      if(val !=-1){
        alert("Redirection vers typeUser");
      }
      else{
        alert("Utilisateur pas connecté");
      }
    });*/

    this.logindata.username;
    this.logindata.password;
  }
  ngOnInit(){
  
  }
  seConnect(){
    if(this.logindata.username != "" && this.logindata.password != "" ){
                    console.log("username:",this.logindata.username);
                    console.log("password:",this.logindata.password);

                    let url:string = "http://localhost/myapp/users/login/login.php";
/*let dataPost = JSON.stringify({
                         username:this.logindata.username,
                         password:this.logindata.password,

});*/

                 let dataPost = new FormData();
                 dataPost.append('username',this.logindata.username);
                dataPost.append('password',this.logindata.password);


   let data:Observable<any> =this.http.post(url,dataPost);
    data.subscribe(res =>{
      //alert(JSON.stringify(res));

            if(res.success =="true"){
                this.storage.set('iduser', res.result.iduser);
                  this.storage.set('typeUser', res.result.typeUser);
              switch(res.result.typeUser){
                case "1":
                  this.storage.set('nom', res.result.nom);
                  this.storage.set('prenom', res.result.prenom);
                  this.storage.set('username', res.result.username);
                  this.storage.set('ntelephone', res.result.ntelephone);
                  this.storage.set('email', res.result.email);
                  
                  this.router.navigate(['/accueuiladmin']); break;
                case "2":
                this.storage.set('nom', res.result.nom);
                this.storage.set('prenom', res.result.prenom);
                this.storage.set('username', res.result.username);
                this.storage.set('ntelephone', res.result.ntelephone);
                this.storage.set('email', res.result.email);
                this.storage.set('iduser_chauffeur', res.result.iduser_chauffeur);
                this.storage.set('numpermis', res.result.numpermis);
                this.storage.set('datepermis', res.result.datepermis);
                  this.router.navigate(['/chauffeur']);break;
                case "3":

                this.storage.set('nom', res.result.nom);
                this.storage.set('prenom', res.result.prenom);
                this.storage.set('username', res.result.username);
                this.storage.set('ntelephone', res.result.ntelephone);
                this.storage.set('email', res.result.email);
                
                  this.router.navigate(['/client']);break;
                default:
                  break;
              }
            } else
                this.showToast("Erreur d'authentification","danger");//TOAST
            
    });  


      //this.router.navigate(['/accueuiladmin']);


    }else 
    
      this.showToast("veuiller remplir les champs","danger");
    
    
  }


  Inscriptionclient(){
    this.router.navigate(['/inscrption']);
  }
  InscriptionChauffeur(){
    this.router.navigate(['/inscrptionchauffeur']);
  }
  async showToast(msg,color)
  {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color:color
    });
    toast.present();
  }
}
