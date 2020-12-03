import { Component} from '@angular/core';
import { MenuController } from '@ionic/angular';
import {Router,ActivatedRoute} from '@angular/router';
import { AlertController ,LoadingController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage {
 
 
  
  public nom: any;
  public prenom: any;
  public email:any;
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
    this.storage.get('prenom').then((prenom) => {
      this.prenom = prenom;
  });
  this.storage.get('email').then((email) => {
    this.email = email;
});
 
   }
  
 
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  profil(){
    this.router.navigate(['/client/profilclient']);
  }
  reserver(){
    this.router.navigate(['/client/reservervoiture']);
  }
  mesreservations(){
    this.router.navigate(['/client/historique']);
  }
  aide(){
    this.router.navigate(['/client/aide']);
  }
  
    logout(){
    
      this.storage.set('iduser', '-1');
      this.storage.set('typeUser', '-1');    
      this.storage.set('username','-1');
      this.storage.set('prenom','-1');
      this.storage.set('nom','-1');
      this.storage.set('email','-1');
      this.storage.set('ntelephone','-1');
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
          value:this.email,
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
                customer:"client"
                }
              this.http.get('http://localhost/myapp/users/userclient/add-feedback.php',{
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
}
