import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-accueuiladmin',
  templateUrl: './accueuiladmin.page.html',
  styleUrls: ['./accueuiladmin.page.scss'],
})
export class AccueuiladminPage {
public nom:any;
public prenom:any;
  constructor( 
    private router:Router,
    private storage:Storage
  ) { 
   /* storage.get('username').then((val) => {
    alert("your name is "+val);
  });*/
  this.storage.get('nom').then((nom) => {
    this.nom = nom;
});
this.storage.get('prenom').then((prenom) => {
  this.prenom = prenom;
});
 }

  logout(){
    this.storage.set('iduser', '-1');
    this.storage.set('typeUser', '-1');    
    this.storage.set('username','-1');
    this.storage.set('prenom','-1');
    this.storage.set('nom','-1');
    this.storage.set('email','-1');
    this.storage.set('ntelephone','-1');
    this.router.navigate(['/home']);
  

    
  }

  voitures(){
    this.router.navigate(['/accueuiladmin/voitures']);
  }
  chauffeurs(){
    this.router.navigate(['/accueuiladmin/chauffeurs']);
  }
  missions(){
    this.router.navigate(['/accueuiladmin/missions']);
  }
  maintenance(){
    this.router.navigate(['/accueuiladmin/maintenance']);
  }
  feedback(){
    this.router.navigate(['/accueuiladmin/feedback']);
  }
}
