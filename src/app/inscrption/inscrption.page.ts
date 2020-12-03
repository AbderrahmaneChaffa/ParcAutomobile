import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { ToastController } from '@ionic/angular';
import { AlertController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-inscrption',
  templateUrl: './inscrption.page.html',
  styleUrls: ['./inscrption.page.scss'],
})
export class InscrptionPage{

  email:any='';
  password:any='';
  nom:any='';
  prenom:any='';
  passwordConf:any='';
  username:any='';
  ntelephone:any='';
  typeUser="3";
  constructor(
    private router:Router,
    public http:HttpClient,
    public toastController: ToastController,
    public loadingController: LoadingController
     ) {}

  async inscrire(){
    if(this.nom == "" ){
      this.showToast("votre nom est Obligatoire","danger")
    }else if(this.prenom == "" ) {
      this.showToast("votre prenom est Obligatoire","danger")
    }else if(this.email == "" ) {
      this.showToast("votre email est Obligatoire","danger")
    }else if(this.ntelephone == "" ) {
      this.showToast("votre numero telephone est Obligatoire","danger")
    }else if(this.username == "" ){
      this.showToast("votre nom d'utilisateur est Obligatoire","danger")

    }else if(this.password == "" ) {
      this.showToast("votre mot de passe est Obligatoire","danger")
    }else if(this.passwordConf != this.password ) {
      this.showToast("Confirmer votre mot de passe SVP","danger")
    }else{

      const loading = await this.loadingController.create({
        message: 'Saving. Please wait..',
      });
      await loading.present();

    
      //make http request
      let prms:any={nom:this.nom,
        prenom:this.prenom,
        email:this.email,
        ntelephone:this.ntelephone,
        username:this.username,
        password:this.password,
        typeUser:this.typeUser
       }
      this.http.get('http://localhost/myapp/users/userclient/inscrire.php',{
        params:prms
      }).subscribe(data=>{
        loading.dismiss()
        if(data["status"]==1)
        {
          this.showToast("Saved","secondary")
          //this.getCartList()
          this.router.navigate(['/home']);
          
        }else{
          this.showToast("Unable to save.","danger")

        }
      })

    }
  
  
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
