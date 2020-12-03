import { Component} from '@angular/core';
import { MenuController } from '@ionic/angular';
import {Router,ActivatedRoute} from '@angular/router';
import { AlertController ,LoadingController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-chauffeur',
  templateUrl: './chauffeur.page.html',
  styleUrls: ['./chauffeur.page.scss'],
})
export class ChauffeurPage {
  
  public nom: any;
  public prenom: any;
  public email:any;
  public ntelephone_chauffeur:any;
  public username_chauffeur:any;
  public iduser_chauffeur:any;
  edit_index=-1
  missions_list=[]
  constructor(private menu: MenuController,
    private router:Router,
    public alertController: AlertController,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public http: HttpClient,
    private storage:Storage) {
     /* storage.get('username').then((val) => {
        alert("your name is "+val);
      });*/
      this.storage.get('nom').then((nom) => {
        this.nom = nom;
    });
    this.storage.get('username').then((username) => {
      this.username_chauffeur = username;
  });
    this.storage.get('email').then((email) => {
      this.email = email;
  });
    this.storage.get('prenom').then((prenom) => {
      this.prenom = prenom;
  });
  this.storage.get('ntelephone').then((ntelephone) => {
    this.ntelephone_chauffeur = ntelephone;
});
this.storage.get('iduser').then((iduser) => {
  this.iduser_chauffeur = iduser;
});
  this.getMissionsList()
  }
 montant:any=''
async evoyer(index){
  
  this.edit_index=index
  if(this.edit_index!=-1)
    {
      const loading = await this.loadingController.create({
        message: 'Updating. Please wait..',
      });
      await loading.present();
      let idmission=this.missions_list[this.edit_index].idmission
      let idvoiture=this.missions_list[this.edit_index].idvoiture
      let iduser_client=this.missions_list[this.edit_index].iduser_client  
      let prms:any={montant:this.montant,
        iduser_chauffeur:this.iduser_chauffeur,
        iduser_client:iduser_client,
        idmission:idmission,
        idvoiture:idvoiture,
        }
      this.http.get('http://localhost/myapp/missions/add-course.php',{
        params:prms
      }).subscribe(data=>{
       loading.dismiss()
        if(data["status"]==1)
        {
          this.showToast("Saved","secondary")
          //this.getCartList()
          
        }else{
          this.showToast("Unable to save.","danger")

        }
      })

    
    }

}
 
 profil(){
   this.router.navigate(['/chauffeur/profilchauffeur']);
 }
 reparer(){
   this.router.navigate(['/chauffeur/ajouterreparation']);
 }
 mescourses(){
   this.router.navigate(['/chauffeur/historique']);
 }
 aide(){
   this.router.navigate(['/chauffeur/aide']);
 }
 logout(){
   // this.storage.clear();
  this.storage.set('iduser', '-1');
  this.storage.set('typeUser', '-1');    
  this.storage.set('username','-1');
  this.storage.set('prenom','-1');
  this.storage.set('nom','-1');
  this.storage.set('email','-1');
  this.storage.set('ntelephone','-1');
  this.storage.set('numpermis','-1');
  this.storage.set('datepermis','-1');

  this.router.navigate(['/home']);
}

 async feedback() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Feedback ! ',
    inputs: [
      {
        name: 'Email',
        type: 'email',
        value: this.email,
        placeholder: 'Tapez votre Email...'
      },
      {
        name: 'Sujet',
        type: 'text',
        placeholder: 'Tapez votre sujet ..'
      },
      // multiline input.
      {
        name: 'Message',
        type: 'textarea',
        placeholder: 'Tapez Votre message ...'
      }
      
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: async(data) => {
          if(data.Email.length==0){
            this.showToast("Please enter Email","danger");
          }else if(data.Sujet.length==0){
            this.showToast("Please enter Sujet","danger");
          }else if(data.Message.length==0){
            this.showToast("Please enter Message","danger");
          }else {

            const loading = await this.loadingController.create({
              message: 'Saving. Please wait..',
            });
            await loading.present();
      
          
            //make http request
            let prms:any={email:data.Email,
              sujet:data.Sujet,
              message:data.Message,
              customer:"chauffeur"
              }
            this.http.get('http://localhost/myapp/feedback/add-feedback.php',{
              params:prms
            }).subscribe(data=>{
              loading.dismiss()
              if(data["status"]==1)
              {
                this.showToast("Saved","secondary")
                //this.getCartList()
                
              }else{
                this.showToast("Unable to save.","danger")
      
              }
            })
      
          }
        }
      }
    ]
  });

  await alert.present();
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

getMissionsList()
{
  this.http.get('http://localhost/myapp/missions/get-missions-list.php').subscribe(data=>{
  this.missions_list=<Array<any>>data
  })
}

}

