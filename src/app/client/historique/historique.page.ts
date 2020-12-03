import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MenuController } from '@ionic/angular';
import {Router,ActivatedRoute} from '@angular/router';
import { AlertController ,LoadingController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage  {
etat_relation:any=''
  public iduser_client
  buttonterminerDisabled:any=''
  iduser_chauffeur:any=''
  idvoiture:any=''
  buttonaccepterDisabled:any=''
  constructor(private router:Router,
    private menu: MenuController,
    private ac:AlertController,
    public alertController: AlertController,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public http: HttpClient,
    private storage:Storage) {
      this.buttonterminerDisabled=false
      this.buttonaccepterDisabled=false

     storage.get('iduser').then((iduser) => {
        this.iduser_client = iduser;
        this.getRelationsList()
    });

    
     }
     edit_index=-1
    relations_list=[]
    
    async showToast(msg,color)
    {
      const toast = await this.toastController.create({
        message: msg,
        duration: 2000,
        color:color
      });
      toast.present();
    }
   getRelationsList(){
      this.http.get("http://localhost/myapp/missions/get-relation-list.php?iduser_client="+this.iduser_client).subscribe(data=>{
        this.relations_list=<Array<any>>data
        })
      
    }
    async remove(idrelation)
  {
    const loading = await this.loadingController.create({
      message: 'Deleting. Please wait..',
    });
    await loading.present();

    //make http request
    let prms:any={idrelation:idrelation}
    this.http.get('http://localhost/myapp/missions/delete-relation.php',{
      params:prms
    }).subscribe(data=>{
      loading.dismiss()
      if(data["status"]==1)
      {
        this.showToast("Deleted","secondary")
        //this.product_list.splice(index,1)
        this.getRelationsList()
      }else{
        this.showToast("Unable to delete.","danger")

      }
    })
  }
  async delete(index)
  {
    const alert = await this.ac.create({
      header: 'Delete',
      message: 'Do you want to delete?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            //console.log('Confirm Okay');
            this.remove(this.relations_list[index].idrelation)
          //
         // this.showToast("Deleted Product","success")
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async terminer(x,index){
    this.edit_index=index
    this.iduser_chauffeur=x.iduser_chauffeur;
    this.idvoiture=x.idvoiture
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Evaluation ',
      subHeader:'svp evaluer la voiture et le chauffeur ',
      inputs: [
        {
          name: 'notev',
          type: 'text',
          
          placeholder: 'Noter La voiture sur 5 '
        },
        {
          name: 'messagev',
          type: 'textarea',
          placeholder: 'votre avis sur la voiture ..'
        },
        // multiline input.
        {
          name: 'notec',
          type: 'text',
          placeholder: 'Noter le chauffeur sur 5 ...'
        },
        {
          name: 'messagec',
          type: 'textarea',
          placeholder: 'votre sur le chauffeur ...'
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
            if(data.notev.length==0){
              this.showToast("Please enter Email","danger");
            }else  {

              const loading = await this.loadingController.create({
                message: 'Saving. Please wait..',
              });
              await loading.present();
        
            
              //make http request
              let prms:any={
                iduser_client:this.iduser_client,
                iduser_chauffeur:this.iduser_chauffeur,
                idvoiture:this.idvoiture,
                notev:data.notev,
                notec:data.notec,
                messagev:data.messagev,
                messagec:data.messagec,
                
                }
              this.http.get('http://localhost/myapp/evaluation/add-evaluation.php',{
                params:prms
              }).subscribe(data=>{
                loading.dismiss()
                if(data["status"]==1)
                {
                  this.buttonterminerDisabled=true
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
  
  async accepter(index){
    this.edit_index=index
    if(this.edit_index!=-1)
    {
    const loading = await this.loadingController.create({
      message: 'Updating. Please wait..',
    });
    await loading.present();
    let idrelation=this.relations_list[this.edit_index].idrelation
    let idmission=this.relations_list[this.edit_index].idmission
    let etat="1"
    //make http request
    let prms:any={etat:etat,idrelation:idrelation,idmission:idmission}
    this.http.get('http://localhost/myapp/missions/accepter-relation.php',{
      params:prms
    }).subscribe(data=>{
      loading.dismiss()
      if(data["status"]==1)
      {
        this.buttonaccepterDisabled=true
        this.showToast("Accepter","secondary")
        this.getRelationsList()
        
        
      }else{
        this.showToast("Unable to update.","danger")

      }
    })
    }
     
    }
  
}
