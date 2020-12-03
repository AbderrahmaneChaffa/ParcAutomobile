import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { ToastController } from '@ionic/angular';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-ajouterchauffeur',
  templateUrl: './ajouterchauffeur.page.html',
  styleUrls: ['./ajouterchauffeur.page.scss'],
})
export class AjouterchauffeurPage {
  email:any='';
  password:any='';
  nom:any='';
  prenom:any='';
  numpermis:any='';
  datepermis:any='';
  passwordConf:any='';
  username:any='';
  ntelephone:any='';
  statut="approuvé";
  customer="actif";
  typeUser="2";
  constructor(private router:Router,
    public http:HttpClient,
    public toastController: ToastController,
    public loadingController: LoadingController) { }
    async inscrire(){
      if(this.nom == "" ){
        this.showToast("votre nom est Obligatoire","danger")
      }else if(this.prenom == "" ) {
        this.showToast("votre prenom est Obligatoire","danger")
      }else if(this.numpermis == "" ){
        this.showToast("votre numero de permis est Obligatoire","danger")
      }else if(this.datepermis == "" ){
        this.showToast("votre date de permis est Obligatoire","danger")
      }else if(this.email == "" ) {
        this.showToast("votre email est Obligatoire","danger")
      }else  if(this.ntelephone == "" ) {
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
        let prms:any={
          nom:this.nom,
          prenom:this.prenom,
          numpermis:this.numpermis,
          datepermis:this.datepermis,
          email:this.email,
          ntelephone:this.ntelephone,
          username:this.username,
          password:this.password,
          typeUser:this.typeUser,
          statut:this.statut,
          customer:this.customer
         }
        this.http.get('http://localhost/myapp/users/userchauffeur/inscrireChauffeur.php',{
          params:prms
        }).subscribe(data=>{
          loading.dismiss()
          if(data["status"]==1)
          {
            this.showToast("Saved","secondary")
            //this.getCartList()
            this.router.navigate(['/accueuiladmin/chauffeurs']);
            
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
