import { Component } from '@angular/core';
import{ApiService} from '../service/api.service';
import{SettingsService} from '../service/settings.service';
import { Router } from  "@angular/router";
import { ActivatedRoute } from "@angular/router";
//import { Plugins } from '@capacitor/core';
//const { Browser } = Plugins;
@Component({
  selector: 'app-ver-tks',
  templateUrl: './ver-tks.page.html',
  styleUrls: ['./ver-tks.page.scss'],
})
export class VerTksPage  {

  constructor(private api:ApiService,private settings:SettingsService, private  router:  Router  ,
    private activatedRoute: ActivatedRoute) { }
  tks:any;
  tipo:number;
  ngOnInit() {
    this.tipo = Number(this.activatedRoute.snapshot.paramMap.get("tipo"));
    
  }
  async opepdf(id) {
    this.router.navigate(['/ver-tk/'+id]);
    //await Browser.open({ 'url': this.settings.GetUrlBackend()+'/pdf_tk?par_tk='+id });
  }
  getTKs(){
   let urltk:String;
    if(this.tipo==1)
    {
      urltk="api/ticket/creado";
    }
    else
    {
      urltk="api/ticket/asignado";
    }
    
     this.api.get(urltk + "?login=" + this.settings.getValue(SettingsService.setting_User) ).subscribe((data)=> {
      this.tks=data;      
           }
     ,
       (err: any) => {
       
         var respuesta=JSON.parse(JSON.stringify(err));   
         
       }
     );
     
   }
   ionViewDidEnter(){
    this.getTKs();
  }
}
