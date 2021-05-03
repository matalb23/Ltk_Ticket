
import{ApiService} from '../service/api.service';
import{SettingsService} from '../service/settings.service';
import { Router } from  "@angular/router";
import { Component  } from '@angular/core';
import { FcmService } from '../service/fcm.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  constructor(private api:ApiService,private settings:SettingsService, private  router:  Router  , private fcmService: FcmService  ) {
   //+ this.ngOnInit();

  }
  infoUsuario:any;
  getMisTemplates(){

    // this.loading.present();   
     this.api.get("api/template?login=" + this.settings.getValue(SettingsService.setting_User) ).subscribe((data)=> {
      this.infoUsuario=data;
      //alert((JSON.stringify(data)));
           }
     ,
       (err: any) => {
       //  this.loading.dismiss();
         //console.log(err);
        
         var respuesta=JSON.parse(JSON.stringify(err));   
         
       }
     );
     
   }
   crearTemplate(template )
   {
   // console.log( template);
    this.settings.SetTemplateForm(template);
    this.router.navigate(['/template-create/'+this.infoUsuario.usuarioNombre]);
  
   }
   verTks(tipo)
   {
    //this.router.navigate(['/ver-tks/'+this.infoUsuario.usuarioNombre]);
    this.router.navigate(['/ver-tks/'+tipo]);
   }

   verMensajes()
   {
    //this.router.navigate(['/ver-tks/'+this.infoUsuario.usuarioNombre]);
    this.router.navigate(['/mensaje/']);
   }
   async ionViewDidEnter(){

    this.getMisTemplates();
   this.fcmService.initPush();
   
  }
  
 
}
