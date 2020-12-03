import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-missions',
  templateUrl: './missions.page.html',
  styleUrls: ['./missions.page.scss'],
})
export class MissionsPage {

  constructor(private router:Router,
    private ac:AlertController,
    public toastController: ToastController,
    public http: HttpClient,
    public loadingController: LoadingController) {
      this.getMissionsList()
      
    }
    missions_list=[]
    
  ajoutercourse(){
    this.router.navigate(['/accueuiladmin/missions/ajoutermissions']);
  }
  getMissionsList()
  {
    this.http.get('http://localhost/myapp/missions/get-missions-list.php').subscribe(data=>{
    this.missions_list=<Array<any>>data
    })
  }

  async remove(idmission)
  {
    const loading = await this.loadingController.create({
      message: 'Deleting. Please wait..',
    });
    await loading.present();

    //make http request
    let prms:any={idmission:idmission}
    this.http.get('http://localhost/myapp/missions/delete-missions.php',{
      params:prms
    }).subscribe(data=>{
      loading.dismiss()
      if(data["status"]==1)
      {
        this.showToast("Deleted","secondary")
        //this.product_list.splice(index,1)
        this.getMissionsList()
      
      
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
            this.remove(this.missions_list[index].idmission)
            
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
