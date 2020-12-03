import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-ajoutermissions',
  templateUrl: './ajoutermissions.page.html',
  styleUrls: ['./ajoutermissions.page.scss'],
})
export class AjoutermissionsPage {
  public username:any;
  public ntelephone:any;
  constructor(private ac:AlertController,
    public toastController: ToastController,
    public http: HttpClient,
    public loadingController: LoadingController,
    private storage:Storage) {


      this.getVehiculesList()


      this.storage.get('username').then((username) => {
        this.username = username;
    });
    this.storage.get('ntelephone').then((ntelephone) => {
      this.ntelephone = ntelephone;
    });
    }
    typemission:any=''
    dhdepart:any=''
    dharrivee:any=''
    bagage:any=''
    montant:any=''
    local1:any=''
    local2:any=''
    voiture:any=''
    notes:any=''

    etat="en attente"
    edit_index=-1
    error_msg=''

    vehicules_list=[]
    getVehiculesList(){
      this.http.get('http://localhost/myapp/missions/get-vehicules-list.php').subscribe(data=>{
        this.vehicules_list=<Array<any>>data
        })
    }

  
    async ajoutercourse(){
   
  
      if(this.typemission.length==0)
      {
       // this.error_msg="Please enter type de voitures"
        this.showToast("Please enter type de course","danger")
      }else if(this.dhdepart.length==0)
      {
       // this.error_msg="Please enter marque de voitures "
        this.showToast("Please enter date de depart","danger")
      }else if(this.dharrivee.length==0)
      {
       // this.error_msg="Please enter model"
        this.showToast("Please enter date de arrivee","danger")
      }else  if(this.bagage.length==0)
      {
       // this.error_msg="Please enter numero de chassis"
        this.showToast("Please enter bagage ","danger")
      }else  if(this.montant.length==0)
      {
        //this.error_msg="Please enter immatriculation de voitures "
        this.showToast("Please enter monatnt","danger")
      }else  if(this.local1.length==0)
      {
       // this.error_msg="Please enter carburant"
        this.showToast("Please enter addresse de depart","danger")
      }else  if(this.local2.length==0)
      {
       // this.error_msg="Please enter numbre de palce"
        this.showToast("Please enter addresse de arrivee  ","danger")
      }else if(this.voiture.length==0)
      {
       // this.error_msg="Please enter couleur"
        this.showToast("Please enter voiture de course ","danger")
      }else if(this.notes.length==0)
      {
       // this.error_msg="Please enter kilometrage"
        this.showToast("Please enter notes","danger")
      }else{
  
        const loading = await this.loadingController.create({
          message: 'Saving. Please wait..',
        });
        await loading.present();
  
      
        //make http request
        let prms:any={
          username:this.username,
          ntelephone:this.ntelephone,
          typemission:this.typemission,
          dhdepart:this.dhdepart,
          dharrivee:this.dharrivee,
          bagage:this.bagage,
          montant:this.montant,
          local1:this.local1,
          local2:this.local2,
          voiture:this.voiture,
          notes:this.notes,
          etat:this.etat,
          
          
        }
        this.http.get('http://localhost/myapp/missions/add-mission.php',{
          params:prms
        }).subscribe(data=>{
          loading.dismiss()
          if(data["status"]==1)
          {
            this.showToast("Saved","secondary")
            //this.getCartList()
            this.reset()
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


reset()
{
 // this.btn="Add"
 this.typemission=''
 this.dhdepart=''
 this.dharrivee=''
 this.bagage=''
 this.montant=''
 this.local1=''
 this.local2=''
 this.voiture=''
 this.notes=''
 
  
}
}
