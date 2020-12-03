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
export class HistoriquePage{
iduser_chauffeur:any=''
  constructor(private router:Router,
    private menu: MenuController,
    private ac:AlertController,
    public alertController: AlertController,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public http: HttpClient,
    private storage:Storage) {
     

     storage.get('iduser').then((iduser) => {
        this.iduser_chauffeur = iduser;
        this.getRelationsList()
        
    });
}
relations_list=[]
getRelationsList(){
  this.http.get("http://localhost/myapp/missions/get-relation-list-fordriver.php?iduser_chauffeur="+this.iduser_chauffeur).subscribe(data=>{
    this.relations_list=<Array<any>>data
    })
  
}

}
