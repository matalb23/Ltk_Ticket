import { Component ,OnInit} from '@angular/core';
import{ApiService} from '../service/api.service';
import{SettingsService} from '../service/settings.service';
import { Router } from  "@angular/router";
import { ActivatedRoute } from "@angular/router";
// import { Plugins } from '@capacitor/core';

type responseTk = {
  id:number;
  Titulo: string;
  Descripcion: string;
  Fecha:Date;
  Creador: string;
  CreadorNombre: string;
  Asignado: string;
  AsignadoNombre: string;
  FechaCumplido: string;
  IdEstado:number;
  EstadoDescripcion: string;
  IdPrioridad:number;
  PrioridadDescripcion: string;
  IdTipo:number;
  TipoDescripcion: string;
  IdEmpresa:number;
  EmpresaNombre: string;
  DescripcionSHtml: string;
  Terminado: string;
  propietario : string;

 
}
@Component({
  selector: 'app-ver-tk',
  templateUrl: './ver-tk.page.html',
  styleUrls: ['./ver-tk.page.scss'],
})
export class VerTkPage implements OnInit {
  ////tk:responseTk;
   //a = {} as responseTk;
  tk:any;

  id:number;
  Titulo: string;
  Descripcion: string;
  Fecha:Date;  
  CreadorNombre: string;  
  AsignadoNombre: string;
  FechaCumplido: string;
  EstadoDescripcion: string;  
  PrioridadDescripcion: string;  
  TipoDescripcion: string;
  EmpresaNombre: string;  
  Terminado: string;
  propietario : string;


  
  tkid:number;
  constructor(private api:ApiService,private settings:SettingsService, private  router:  Router  ,
    private activatedRoute: ActivatedRoute) {
 

     }

  ngOnInit() {
    this.tkid = Number(this.activatedRoute.snapshot.paramMap.get("tkid"));
  }

  getTK(){
    let urltk:String;
 
       urltk="api/ticket/ver";
     
     
      this.api.get(urltk + "?tkid=" + this.tkid ).subscribe((data)=> {
      var respuesta=JSON.parse(JSON.stringify(data));   
  
      this.id=respuesta.id;
      this.Titulo=respuesta.titulo;
      this.Descripcion= respuesta.descripcion;      
      this.Fecha=respuesta.fecha;  
      this.CreadorNombre= respuesta.creadorNombre;  
      this.AsignadoNombre= respuesta.asignadoNombre;
      this.FechaCumplido= respuesta.fechaCumplido;
      this.EstadoDescripcion= respuesta.estadoDescripcion;  
      this.PrioridadDescripcion=respuesta.prioridadDescripcion;  
      this.TipoDescripcion= respuesta.tipoDescripcion;
      this.EmpresaNombre= respuesta.empresaNombre;  
      this.Terminado= respuesta.terminado;
      this.propietario = respuesta.propietario;
      
       console.log(data);   
            }
      ,
        (err: any) => {
        
          var respuesta=JSON.parse(JSON.stringify(err));   
          
        }
      );
      
    }
    ionViewDidEnter(){
     this.getTK();
   }
}
