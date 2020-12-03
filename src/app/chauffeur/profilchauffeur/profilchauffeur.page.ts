import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profilchauffeur',
  templateUrl: './profilchauffeur.page.html',
  styleUrls: ['./profilchauffeur.page.scss'],
})
export class ProfilchauffeurPage implements OnInit {
public iduser_chauffeur:any;
nom:any=''
prenom:any=''
ntelephone:any=''
username:any=''
password:any=''
newpassword:any=''
public iduser:any;
  constructor(private router:Router,
    private storage:Storage,
    private ac:AlertController,
    public toastController: ToastController,
    public http: HttpClient,
    public loadingController: LoadingController) {
      this.storage.get('nom').then((nom) => {
        this.nom = nom;
    });
    this.storage.get('prenom').then((prenom) => {
      this.prenom = prenom;
  });
  this.storage.get('username').then((username) => {
    this.username = username;
  });
  this.storage.get('ntelephone').then((ntelephone) => {
    this.ntelephone = ntelephone;
  });
  this.storage.get('iduser').then((iduser) => {
    this.iduser = iduser;
  });
     }

  ngOnInit() {
  }
  async sauvegarder()
  {
   
    const loading = await this.loadingController.create({
      message: 'Updating. Please wait..',
    });
    await loading.present();
    let iduser=this.iduser
    //make http request
  
    let prms:any={username:this.username,password:this.password,newpassword:this.newpassword,nom:this.nom,prenom:this.prenom,ntelephone:this.ntelephone,iduser:iduser}
    this.http.get('http://localhost/myapp/users/userchauffeur/update-profil.php',{
      params:prms
    }).subscribe(data=>{
      loading.dismiss()
      if(data["status"]==1)
      {
        this.showToast("Updated","secondary")
        this.password=''
         this.newpassword=''
        this.storage.set('nom',this.nom);
        this.storage.set('username',this.username);
        this.storage.set('prenom',this.prenom);
        this.storage.set('ntelephone',this.ntelephone);
        
        
      }else{
        this.showToast("Unable to update.","danger")
        this.password=''
        this.newpassword=''
      }
    })
   
  }
  async supprimercompte(){
    this.storage.get('iduser_chauffeur').then((iduser_chauffeur) => {
      this.iduser_chauffeur=iduser_chauffeur;
    });
    const alert = await this.ac.create({
      header: 'Supprimer',
      message: 'Voulez-vous supprimer ce compte ?',
      buttons: [
        {
          text: 'Oui',
          handler: () => {
            //console.log('Confirm Okay');
            this.remove(this.iduser_chauffeur)
          //
         // this.showToast("Deleted Product","success")
          }
        },
        {
          text: 'Non',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();



  }
 async remove(iduser_chauffeur)
  {
    const loading = await this.loadingController.create({
      message: 'Deleting. Please wait..',
    });
    await loading.present();

    //make http request
    let prms:any={iduser_chauffeur:this.iduser_chauffeur}
    this.http.get('http://localhost/myapp/users/userchauffeur/delete-chauffeur.php',{
      params:prms
    }).subscribe(data=>{
      loading.dismiss()
      if(data["status"]==1)
      {
        this.showToast("Votre compte a été désactiver","secondary")
        //this.product_list.splice(index,1)
        this.router.navigate(['/home']);
      }else{
        this.showToast("Impossible de supprimer.","danger")

      }
    })
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
