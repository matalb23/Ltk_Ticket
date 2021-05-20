import { Component } from '@angular/core';
import{ApiService} from '../service/api.service';
import{SettingsService} from '../service/settings.service';
import { Router } from  "@angular/router";
import { ActivatedRoute } from "@angular/router";

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
  tipoDescripcion:string;
  UserName:string;
  ngOnInit() {
    this.tipo = Number(this.activatedRoute.snapshot.paramMap.get("tipo"));
    this.UserName=this.settings.getValue(SettingsService.setting_UserName);
  }
  async opepdf(id) {
    this.router.navigate(['/ver-tk/'+id]);
   
  }
  getTKs(){
   let urltk:String;
    if(this.tipo==1)
    {
      urltk="api/ticket/creado";
      this.tipoDescripcion="CREADOS";
    }
    else
    {
      urltk="api/ticket/asignado";
      this.tipoDescripcion="ASIGNADOS";
    }
    
     this.api.get(urltk + "?login=" + this.settings.getValue(SettingsService.setting_User) ).subscribe((data)=> {
      this.tks=data;      
    //  console.log(data);
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
  verTks(tipo)
  {    
   this.router.navigate(['/ver-tks/'+tipo]);
  }
  irHome()
  {    
   this.router.navigate(['/home/']);
  }
  verMensajes()
  {    
   this.router.navigate(['/mensaje/']);
  }
}
