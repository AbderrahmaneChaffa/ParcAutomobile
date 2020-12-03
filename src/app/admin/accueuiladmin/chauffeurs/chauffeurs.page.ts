import { Component,OnInit} from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chauffeurs',
  templateUrl: './chauffeurs.page.html',
  styleUrls: ['./chauffeurs.page.scss'],
})
export class ChauffeursPage implements OnInit {

  constructor(private router:Router,
    private ac:AlertController,
    public toastController: ToastController,
    public http: HttpClient,
    public loadingController: LoadingController) { 
      this.getChauffeurList()
      
    }
    ngOnInit(){
      this.getChauffeurList()
    }
    statut:any=''
    edit_index=-1
    error_msg=''
    chauffeur_list=[]
    
    btn='Approuver'
   
    getChauffeurList()
    {
      this.http.get('http://localhost/myapp/users/userchauffeur/get-chauffeur-list.php').subscribe(data=>{
      this.chauffeur_list=<Array<any>>data
      
      })
      
    }
   

    ajouter(){
      this.router.navigate(['/accueuiladmin/chauffeurs/ajouterchauffeur']);
    }
    
    async approuver(x,index)
    {
      this.edit_index=index;
      this.statut=x.statut;
      if(this.edit_index!=-1){
      if(this.statut=="non approuvé"){  
        this.statut="approuvé"
      const loading = await this.loadingController.create({
        message: 'Updating. Please wait..',
      });
      await loading.present();
      let idchauffeur=this.chauffeur_list[this.edit_index].idchauffeur 
      //make http request
      let prms:any={statut:this.statut,idchauffeur:idchauffeur}
      this.http.get('http://localhost/myapp/users/userchauffeur/update-chauffeur-statut.php',{
        params:prms
      }).subscribe(data=>{
        loading.dismiss()
        if(data["status"]==1)
        {
          this.showToast("Updated","secondary")
          this.getChauffeurList()
          this.btn="Non approuver"
          //this.reset()
        }else{
          this.showToast("Unable to update.","danger")
  
        }
      })
      }else  if(this.statut=="approuvé"){
        this.statut="non approuvé"
        const loading = await this.loadingController.create({
          message: 'Updating. Please wait..',
        });
        await loading.present();
        let idchauffeur=this.chauffeur_list[this.edit_index].idchauffeur 
        //make http request
        let prms:any={statut:this.statut,idchauffeur:idchauffeur}
        this.http.get('http://localhost/myapp/users/userchauffeur/update-chauffeur-statut.php',{
          params:prms
        }).subscribe(data=>{
          loading.dismiss()
          if(data["status"]==1)
          {
            this.showToast("Updated","secondary")
            this.getChauffeurList()
            this.btn="Approuver"
            
            //this.reset()
          }else{
            this.showToast("Unable to update.","danger")
    
          }
        })
        
      }}
    }


    async remove(iduser_chauffeur)
    {
      const loading = await this.loadingController.create({
        message: 'Deleting. Please wait..',
      });
      await loading.present();
  
      //make http request
      let prms:any={iduser_chauffeur:iduser_chauffeur}
      this.http.get('http://localhost/myapp/users/userchauffeur/delete-chauffeur.php',{
        params:prms
      }).subscribe(data=>{
        loading.dismiss()
        if(data["status"]==1)
        {
          this.showToast("Compte Chauffeur désactivé","secondary")
          //this.product_list.splice(index,1)
          this.getChauffeurList()
        }else{
          this.showToast("impossible de supprimer.","danger")
  
        }
      })
    }
    async delete(index)
    {
      const alert = await this.ac.create({
        header: 'Supprimer',
        message: 'Do you want to delete?',
        buttons: [
          {
            text: 'Oui',
            handler: () => {
              //console.log('Confirm Okay');
              this.remove(this.chauffeur_list[index].iduser_chauffeur)
            //
           // this.showToast("Deleted Product","success")
            }
          },
          {
            text: 'Non',
            handler: () => {
              console.log('Confirmer Okay');
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
