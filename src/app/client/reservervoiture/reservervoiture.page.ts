import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import {format} from "date-fns";

@Component({
  selector: 'app-reservervoiture',
  templateUrl: './reservervoiture.page.html',
  styleUrls: ['./reservervoiture.page.scss'],
})
export class ReservervoiturePage {

  constructor(private ac:AlertController,
    public toastController: ToastController,
    public http: HttpClient,
    public loadingController: LoadingController,
    private storage: Storage) {
      this.storage.get('iduser').then((iduser) => {
        this.iduser_client = iduser;
    });
   
 
      this.getVehiculesList()
    }
    public iduser_client:any;
    typemission:any=''
    dhdepart:any=''
    dharrivee:any=''
    bagage:any=''
    estimation:any=''
    local1:any=''
    local2:any=''
    voiture:any=''
    notes:any=''
    etat="en attente"
    varShow:any=0;
    varShowVoiture:any=false;
    edit_index=-1
    error_msg=''
    model:any=''
    marque:any=''
    modelSelected:String="Aucun"
    immatriculation:any=''
    choiceMission:any=-1 ;
    idVoitureSelected:any=-1;

    vehicules_list=[]
    
    edit(x,index){
      this.edit_index=index;
      this.immatriculation=x.immatriculation;
      this.marque=x.marque;
      this.model=x.model;
    }
    choisirVoiture(){
      //Envoi une requete au serveur pour demander la liste des voiture disponible selon la date et bloqué ou pas
      //remplir le x
      this.getVehiculesList();
      this.varShowVoiture = !this.varShowVoiture;
    }
    selectionnerVoiture(x,index){
      this.edit_index=index;
      this.immatriculation=x.immatriculation;
      this.marque=x.marque;
      this.model=x.model;
      this.varShowVoiture = !this.varShowVoiture;
    }
     onChange($event){
      this.choiceMission = $event.target.value; 
    switch($event.target.value){
      case 'Voiture sans chauffeur': this.varShow = 1; break;
        case 'Voiture avec chauffeur': this.varShow = 2; break;
          case 'Simple': this.varShow = 3; break;
          default:this.varShow = 0; break;
    }
  }

  onchangedateDep($event){
    if(this.dharrivee<this.dhdepart){
      this.dharrivee = this.dhdepart;
    }
  }
  
  onchangedateArr($event){
    if(this.dharrivee<this.dhdepart){
      this.dhdepart = this.dharrivee;
    }
  }

    getVehiculesList(){
      this.http.get("http://localhost/myapp/missions/get-vehicules-list.php?dateD="+this.dhdepart+"&dateR="+this.dharrivee).subscribe(data=>{
        this.vehicules_list=<Array<any>>data
        })
    }

    
    async ajoutercourse(){
      switch(this.choiceMission){
        case 'Voiture sans chauffeur': 
        if(this.dhdepart.length==0)
        {
         // this.error_msg="Please enter marque de voitures "
          this.showToast("Please enter date de depart","danger")
        }else  if(this.dharrivee.length==0)
        {
         // this.error_msg="Please enter model"
          this.showToast("Please enter date de arrivee","danger")
        }else  
        if(this.model=='')
        {
         // this.error_msg="Please enter couleur"
          this.showToast("Please enter voiture de course ","danger")
        }else if(this.notes.length==0)
        {
         // this.error_msg="Please enter kilometrage"
          this.showToast("Please enter notes","danger")
        }else {
    
          const loading = await this.loadingController.create({
            message: 'Saving. Please wait..',
          });
          await loading.present();
    
        let  idvoiture=this.vehicules_list[this.edit_index].id
          //make http request
          let prms:any={
            
           iduser_client:this.iduser_client,
            typemission:this.typemission,
            dhdepart:format(new Date(this.dhdepart), "yyyy-MM-dd hh:mm:ss"),
            dharrivee:format(new Date(this.dharrivee), "yyyy-MM-dd hh:mm:ss"),
            bagage:this.bagage,
            estimation:this.estimation,
                  local1:this.local1,
                  local2:this.local2,
            idvoiture:idvoiture,
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
        ; break;
          case 'Voiture avec chauffeur':
            if(this.dhdepart.length==0)
            {
             // this.error_msg="Please enter marque de voitures "
              this.showToast("Please enter date de depart","danger")
            }else  if(this.dharrivee.length==0)
            {
             // this.error_msg="Please enter model"
              this.showToast("Please enter date de arrivee","danger")
            }else 
            if(this.model=='')
            {
             // this.error_msg="Please enter couleur"
              this.showToast("Please enter voiture de course ","danger")
            }else if(this.notes.length==0)
            {
             // this.error_msg="Please enter kilometrage"
              this.showToast("Please enter notes","danger")
            }else {
        
              const loading = await this.loadingController.create({
                message: 'Saving. Please wait..',
              });
              await loading.present();
        
            let  idvoiture=this.vehicules_list[this.edit_index].id
              //make http request
              let prms:any={
                
               iduser_client:this.iduser_client,
                typemission:this.typemission,
                dhdepart:format(new Date(this.dhdepart), "yyyy-MM-dd hh:mm:ss"),
                dharrivee:format(new Date(this.dharrivee), "yyyy-MM-dd hh:mm:ss"),
                bagage:this.bagage,
                estimation:this.estimation,
                  local1:this.local1,
                  local2:this.local2,
                idvoiture:idvoiture,
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
          ; break;
            case 'Simple':
              if(this.dhdepart.length==0)
              {
               // this.error_msg="Please enter marque de voitures "
                this.showToast("Please enter date de depart","danger")
              }else  if(this.bagage.length==0)
              {
               // this.error_msg="Please enter model"
                this.showToast("Please enter bagage","danger")
              }else  if(this.local1.length==0)
              {
               // this.error_msg="Please enter model"
                this.showToast("Please enter local1","danger")
              }else if(this.local2.length==0)
              {
               // this.error_msg="Please enter model"
                this.showToast("Please enter local2","danger")
              }else if(this.estimation.length==0)
              {
               // this.error_msg="Please enter model"
                this.showToast("Please enter estimation","danger")
              }else 
              if(this.model=='')
              {
               // this.error_msg="Please enter couleur"
                this.showToast("Please enter voiture de course ","danger")
              }else if(this.notes.length==0)
              {
               
                this.showToast("Please enter notes","danger")
              }else {
          
                const loading = await this.loadingController.create({
                  message: 'Saving. Please wait..',
                });
                await loading.present();
          
              let  idvoiture=this.vehicules_list[this.edit_index].id
                //make http request
                let prms:any={
                  
                 iduser_client:this.iduser_client,
                  typemission:this.typemission,
                  dhdepart:format(new Date(this.dhdepart), "yyyy-MM-dd hh:mm:ss"),
                  dharrivee:format(new Date(this.dharrivee), "yyyy-MM-dd hh:mm:ss"),
                  bagage:this.bagage,
                  estimation:this.estimation,
                  local1:this.local1,
                  local2:this.local2,
                  idvoiture:idvoiture,
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
            ; break;
            default:
            alert("Veuillez choisir une mission");  
            ; break;
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
 this.estimation=''
 this.local1=''
 this.local2=''
 this.voiture=''
 this.notes=''
 this.model=''
 this.marque=''
 
  
}
}
