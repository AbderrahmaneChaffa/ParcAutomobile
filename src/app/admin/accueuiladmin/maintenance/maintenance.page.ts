import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.page.html',
  styleUrls: ['./maintenance.page.scss'],
})
export class MaintenancePage {

  constructor(private router:Router,
    private ac:AlertController,
    public toastController: ToastController,
    public http: HttpClient,
    public loadingController: LoadingController) {
      this.getReparationList()
    }
    kilometrage:any=''
    notes:any=''
    effectue:any=''
    
    edit_index=-1
    error_msg=''
  reparation_list=[]
  
  edit(x,index)
    {
      
      this.kilometrage=x.kilometrage
      
      this.effectue=x.effectue
      this.notes=x.notes
      this.edit_index=index
    }
    reset()
    {
      
      this.kilometrage=''
      this.notes=''
      this.effectue=''
      
    }
  
  ajouter(){
    this.router.navigate(['/accueuiladmin/maintenance/ajouterreparation']);
  }
  
  

  getReparationList()
  {
    this.http.get('http://localhost/myapp/reparation/get-reparation-list.php').subscribe(data=>{
    this.reparation_list=<Array<any>>data
    })
  }

  async remove(idrep)
  {
    const loading = await this.loadingController.create({
      message: 'Deleting. Please wait..',
    });
    await loading.present();

    //make http request
    let prms:any={idrep:idrep}
    this.http.get('http://localhost/myapp/reparation/delete-reparation.php',{
      params:prms
    }).subscribe(data=>{
      loading.dismiss()
      if(data["status"]==1)
      {
        this.showToast("Deleted","secondary")
        //this.product_list.splice(index,1)
        this.getReparationList()
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
            this.remove(this.reparation_list[index].idrep)
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

  async showToast(msg,color)
  {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color:color
    });
    toast.present();
  }
  async update()
  {
    if(this.edit_index!=-1)
    {
    const loading = await this.loadingController.create({
      message: 'Updating. Please wait..',
    });
    await loading.present();
    let idrep=this.reparation_list[this.edit_index].idrep
    //make http request
    let prms:any={kilometrage:this.kilometrage,effectue:this.effectue,notes:this.notes,idrep:idrep}
    this.http.get('http://localhost/myapp/reparation/update-reparation.php',{
      params:prms
    }).subscribe(data=>{
      loading.dismiss()
      if(data["status"]==1)
      {
        this.showToast("Updated","secondary")
        this.getReparationList()
        
        this.reset()
      }else{
        this.showToast("Unable to update.","danger")

      }
    })
    }
  }
}
