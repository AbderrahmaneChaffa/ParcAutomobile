import { Component } from '@angular/core';

import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { AlertController, LoadingController } from '@ionic/angular';
import {format} from "date-fns";
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ajouterreparation',
  templateUrl: './ajouterreparation.page.html',
  styleUrls: ['./ajouterreparation.page.scss'],
})
export class AjouterreparationPage{
  public iduser_rediger:any;
  public username_rediger:any;
  constructor(private ac:AlertController,
    public toastController: ToastController,
    public http: HttpClient,
    private storage:Storage,
    public loadingController: LoadingController) {
      this.getVehiculesList()
      this.storage.get('iduser_chauffeur').then((iduser_chauffeur) => {
        this.iduser_rediger=iduser_chauffeur;
      });
      this.storage.get('username').then((username) => {
        this.username_rediger=username;
      });
    }

    immatriculation:any=''
    marque:any=''
    model:any=''

    typereparation:any=''
    date_reparation:any=''
    nbon:any=''
    kilometrage:any=''
    montant:any=''
    notes:any=''
    effectue:any=''
    error_msg=''
    btn='Add'
    edit_index=-1
    vehicules_list=[]
    varShowVoiture:any=false;
    reset()
    {
      this.btn="Add"
      this.immatriculation=''
      this.typereparation=''
      this.date_reparation=''
      this.nbon=''
      this.kilometrage=''
      this.montant=''
      this.notes=''
      this.effectue=''

    }
  
    
    getVehiculesList(){
      this.http.get('http://localhost/myapp/reparation/get-vehicules-list.php').subscribe(data=>{
        this.vehicules_list=<Array<any>>data
        })
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
    async add()
  {
    if(this.typereparation.length==0)
    {
      this.error_msg="Please enter type reparation"
      this.showToast("Please enter type reparation","danger")
    }else if(this.date_reparation.length==0)
    {
      this.error_msg="Please enter date reparation"
      this.showToast("Please enter date reparation","danger")
    }else  if(this.nbon.length==0)
    {
      this.error_msg="Please enter numero bon"
      this.showToast("Please enter numero bon","danger")
    }else if(this.kilometrage.length==0)
    {
      this.error_msg="Please enter kilometrage"
      this.showToast("Please enter kilometrage","danger")
    }else if(this.montant.length==0)
    {
      this.error_msg="Please enter montant "
      this.showToast("Please enter montant","danger")
    }else if(this.notes.length==0)
    {
      this.error_msg="Please enter notes"
      this.showToast("Please enter notes","danger")
    }else {

      const loading = await this.loadingController.create({
      message: 'Saving. Please wait..',
      });
      await loading.present();
      let  idvoiture=this.vehicules_list[this.edit_index].id
      //make http request
      let prms:any={
        //immatriculation:this.immatriculation,
        idvoiture:idvoiture,
        typereparation:this.typereparation,
        date_reparation:format(new Date(this.date_reparation), "yyyy/MM/dd"),
        nbon:this.nbon,
        kilometrage:this.kilometrage,
        montant:this.montant,
        notes:this.notes,
        effectue:this.effectue,
        iduser_rediger:this.iduser_rediger,
        username_rediger:this.username_rediger}
      this.http.get('http://localhost/myapp/reparation/add-reparation.php',{
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

}
