import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajoutervoitures',
  templateUrl: './ajoutervoitures.page.html',
  styleUrls: ['./ajoutervoitures.page.scss'],
})
export class AjoutervoituresPage {

  constructor(private ac:AlertController,
    public toastController: ToastController,
    public http: HttpClient,
    public loadingController: LoadingController) {
      
    }
  
    typevoitures:any=''
    marque:any=''
    model:any=''
    nchassis:any=''
    immatriculation:any=''
    carburant:any=''
    nplace:any=''
    couleur:any=''
    kilometrage:any=''
    chauffeur:any=''
    etat="Libre"
  
 
  async ajoutervoitures(){
   
  
    if(this.typevoitures.length==0)
    {
     // this.error_msg="Please enter type de voitures"
      this.showToast("Please enter type de voitures","danger")
    }else if(this.marque.length==0)
    {
     // this.error_msg="Please enter marque de voitures "
      this.showToast("Please enter marque de voitures","danger")
    }else if(this.model.length==0)
    {
     // this.error_msg="Please enter model"
      this.showToast("Please enter model","danger")
    }else  if(this.nchassis.length==0)
    {
     // this.error_msg="Please enter numero de chassis"
      this.showToast("Please enter numero de chassis ","danger")
    }else  if(this.immatriculation.length==0)
    {
      //this.error_msg="Please enter immatriculation de voitures "
      this.showToast("Please enter immatriculation de voitures","danger")
    }else  if(this.carburant.length==0)
    {
     // this.error_msg="Please enter carburant"
      this.showToast("Please enter carburant","danger")
    }else  if(this.nplace.length==0)
    {
     // this.error_msg="Please enter numbre de palce"
      this.showToast("Please enter numbre de place ","danger")
    }else if(this.couleur.length==0)
    {
     // this.error_msg="Please enter couleur"
      this.showToast("Please enter couleur ","danger")
    }else if(this.kilometrage.length==0)
    {
     // this.error_msg="Please enter kilometrage"
      this.showToast("Please enter kilometrage","danger")
    }else if(this.chauffeur.length==0)
    {
    //  this.error_msg="Please enter chauffeur"
      this.showToast("Please enter chauffeur","danger")
    }else{

      const loading = await this.loadingController.create({
        message: 'Saving. Please wait..',
      });
      await loading.present();

    
      //make http request
      let prms:any={typevoitures:this.typevoitures,
        marque:this.marque,
        model:this.model,
        nchassis:this.nchassis,
        immatriculation:this.immatriculation,
        carburant:this.carburant,
        nplace:this.nplace,
        couleur:this.couleur,
        kilometrage:this.kilometrage,
        chauffeur:this.chauffeur,
      etat:this.etat}
      this.http.get('http://localhost/myapp/voitures/add-voitures.php',{
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
  reset()
  {
   // this.btn="Add"
   this.typevoitures=''
   this.marque=''
   this.model=''
   this.nchassis=''
   this.immatriculation=''
   this.carburant=''
   this.nplace=''
   this.couleur=''
   this.kilometrage=''
   this.chauffeur=''
    
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
