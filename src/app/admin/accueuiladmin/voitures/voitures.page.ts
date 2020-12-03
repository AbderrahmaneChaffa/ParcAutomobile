import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.page.html',
  styleUrls: ['./voitures.page.scss'],
})
export class VoituresPage {

  constructor(private router:Router,
    private ac:AlertController,
    public toastController: ToastController,
    public http: HttpClient,
    public loadingController: LoadingController) {
      this.getVehiculesListLibre()
      this.getVehiculesListMission()
      this.getVehiculesListPanne()
    }
    kilometrage:any=''
    couleur:any=''
    etat:any=''
    immatriculation:any=''

    edit_index=-1
    error_msg=''

    vehicules_list_libre=[]
    vehicules_list_mission=[]
    vehicules_list_panne=[]

    edit(x,index)
    {
      
      this.kilometrage=x.kilometrage
      this.immatriculation=x.immatriculation
      this.couleur=x.couleur
      this.etat=x.etat
      this.edit_index=index
    }
    reset()
    {
      
      this.kilometrage=''
      this.couleur=''
      this.etat=''
      this.immatriculation=''
    }
async updatelibre()
  {
    if(this.edit_index!=-1)
    {
    const loading = await this.loadingController.create({
      message: 'Updating. Please wait..',
    });
    await loading.present();
    let id=this.vehicules_list_libre[this.edit_index].id 
    //make http request
    let prms:any={kilometrage:this.kilometrage,couleur:this.couleur,etat:this.etat,immatriculation:this.immatriculation,id:id}
    this.http.get('http://localhost/myapp/voitures/update-libre.php',{
      params:prms
    }).subscribe(data=>{
      loading.dismiss()
      if(data["status"]==1)
      {
        this.showToast("Updated","secondary")
        this.getVehiculesListLibre()
        this.getVehiculesListMission()
        this.getVehiculesListPanne()
        this.reset()
      }else{
        this.showToast("Unable to update.","danger")

      }
    })
    }
  }
  async updatemission()
  {
    if(this.edit_index!=-1)
    {
    const loading = await this.loadingController.create({
      message: 'Updating. Please wait..',
    });
    await loading.present();
    let id=this.vehicules_list_mission[this.edit_index].id
    //make http request
    let prms:any={kilometrage:this.kilometrage,couleur:this.couleur,etat:this.etat,immatriculation:this.immatriculation,id:id}
    this.http.get('http://localhost/myapp/voitures/update-libre.php',{
      params:prms
    }).subscribe(data=>{
      loading.dismiss()
      if(data["status"]==1)
      {
        this.showToast("Updated","secondary")
        this.getVehiculesListLibre()
        this.getVehiculesListMission()
        this.getVehiculesListPanne()
        this.reset()
      }else{
        this.showToast("Unable to update.","danger")

      }
    })
    }
  }
  async updateEnpanne()
  {
    if(this.edit_index!=-1)
    {
    const loading = await this.loadingController.create({
      message: 'Updating. Please wait..',
    });
    await loading.present();
    let id=this.vehicules_list_panne[this.edit_index].id
    //make http request
    let prms:any={kilometrage:this.kilometrage,couleur:this.couleur,etat:this.etat,immatriculation:this.immatriculation,id:id}
    this.http.get('http://localhost/myapp/voitures/update-libre.php',{
      params:prms
    }).subscribe(data=>{
      loading.dismiss()
      if(data["status"]==1)
      {
        this.showToast("Updated","secondary")
        this.getVehiculesListLibre()
        this.getVehiculesListMission()
        this.getVehiculesListPanne()
        this.reset()
      }else{
        this.showToast("Unable to update.","danger")

      }
    })
    }
  }

  ajoutervoitures(){
    this.router.navigate(['/accueuiladmin/voitures/ajoutervoitures']);
  }

  getVehiculesListLibre()
  {
    this.http.get('http://localhost/myapp/voitures/get-vehicules-list-libre.php').subscribe(data=>{
    this.vehicules_list_libre=<Array<any>>data
    })
  }
  getVehiculesListMission()
  {
    this.http.get('http://localhost/myapp/voitures/get-vehicules-list-mission.php').subscribe(data=>{
    this.vehicules_list_mission=<Array<any>>data
    })
  }
  getVehiculesListPanne()
  {
    this.http.get('http://localhost/myapp/voitures/get-vehicules-list-panne.php').subscribe(data=>{
    this.vehicules_list_panne=<Array<any>>data
    })
  }


  async remove_libre(id)
  {
    const loading = await this.loadingController.create({
      message: 'Deleting. Please wait..',
    });
    await loading.present();

    //make http request
    let prms:any={id:id}
    this.http.get('http://localhost/myapp/voitures/delete-voiture.php',{
      params:prms
    }).subscribe(data=>{
      loading.dismiss()
      if(data["status"]==1)
      {
        this.showToast("Deleted","secondary")
        //this.product_list.splice(index,1)
        this.getVehiculesListLibre()
      
      }else{
        this.showToast("Unable to delete.","danger")

      }
    })
  }
  async remove_occupee(id)
  {
    const loading = await this.loadingController.create({
      message: 'Deleting. Please wait..',
    });
    await loading.present();

    //make http request
    let prms:any={id:id}
    this.http.get('http://localhost/myapp/voitures/delete-voiture.php',{
      params:prms
    }).subscribe(data=>{
      loading.dismiss()
      if(data["status"]==1)
      {
        this.showToast("Deleted","secondary")
        //this.product_list.splice(index,1)
       
      this.getVehiculesListMission()
      
      }else{
        this.showToast("Unable to delete.","danger")

      }
    })
  }
  async remove_panne(id)
  {
    const loading = await this.loadingController.create({
      message: 'Deleting. Please wait..',
    });
    await loading.present();

    //make http request
    let prms:any={id:id}
    this.http.get('http://localhost/myapp/voitures/delete-voiture.php',{
      params:prms
    }).subscribe(data=>{
      loading.dismiss()
      if(data["status"]==1)
      {
        this.showToast("Deleted","secondary")
        //this.product_list.splice(index,1)
       
      this.getVehiculesListPanne()
      }else{
        this.showToast("Unable to delete.","danger")

      }
    })
  }
  async delete_libre(index)
  {
    const alert = await this.ac.create({
      header: 'Delete',
      message: 'Do you want to delete?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            //console.log('Confirm Okay');
            this.remove_libre(this.vehicules_list_libre[index].id)
            
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
  async delete_mission(index)
  {
    const alert = await this.ac.create({
      header: 'Delete',
      message: 'Do you want to delete?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            //console.log('Confirm Okay');
            this.remove_occupee(this.vehicules_list_mission[index].id)
            
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
  async delete_panne(index)
  {
    const alert = await this.ac.create({
      header: 'Delete',
      message: 'Do you want to delete?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            //console.log('Confirm Okay');
            this.remove_panne(this.vehicules_list_panne[index].id)
            
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

