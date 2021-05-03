import { Component } from '@angular/core';
import{ApiService} from '../service/api.service';
import{SettingsService} from '../service/settings.service';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;
@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.page.html',
  styleUrls: ['./mensaje.page.scss'],
})
export class MensajePage  {constructor(private api:ApiService,private settings:SettingsService) { }
mensajes:any;

async opepdf(id) {
  await Browser.open({ 'url': 'http://apptkweb.latikait.com.ar/pdf_tk?par_tk='+id });
}
getMensajes(){

   this.api.get("api/mensaje" + "?login=" + this.settings.getValue(SettingsService.setting_User) ).subscribe((data)=> {
    this.mensajes=data;      
         }
   ,
     (err: any) => {
     
       var respuesta=JSON.parse(JSON.stringify(err));   
       
     }
   );
   
 }
 ionViewDidEnter(){
  this.getMensajes();
}

}
