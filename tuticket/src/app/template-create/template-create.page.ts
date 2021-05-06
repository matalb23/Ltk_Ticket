import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,FormControl, Validators  } from '@angular/forms';
import {SettingsService} from '../service/settings.service';
//import { Geolocation , GeolocationOptions, Geoposition, PositionError} from '@ionic-native/geolocation/ngx';
import {ApiService} from '../service/api.service';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Platform } from '@ionic/angular';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
  CameraPhoto, CameraSource ,Geolocation} from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;

import { LoadingController,ToastController  } from '@ionic/angular';
import { Router } from  "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { templateJitUrl } from '@angular/compiler';
interface RequestImagen  {
  id: string;
  image;
  imageData;      
  imageFile;
}    
type RequestTkItem = {
  id: string;
  valor: string;
  
}
 type RequestTk = {
   templateId:number;
   templateDescripcion:string;
  login: string;
  latitude: number;
  longitude: number;
  items: RequestTkItem[] 
}

@Component({
  selector: 'app-template-create',
  templateUrl: './template-create.page.html',
  styleUrls: ['./template-create.page.scss'],
})
export class TemplateCreatePage  {
 
  //options: GeolocationOptions;
  Imagenes:RequestImagen[];
  username=null;
  template: any ;
  latitude:any;
  longitude:any;
  myFormGroup:FormGroup;
  constructor(private settings:SettingsService,private formBuilder: FormBuilder
    //,private geolocation: Geolocation
    ,private api:ApiService
    //,private camera: Camera
    ,public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
     private  router:  Router,
     private activatedRoute: ActivatedRoute
     , private platform: Platform 
    ) { 
      this.getLocation();

    }

  Init() {
    // this.options = {
    //   maximumAge: 500,
    //   enableHighAccuracy: true
    // };

    this.username = this.activatedRoute.snapshot.paramMap.get("username");
    this.latitude="";
    this.longitude="";
    this.Imagenes=new Array();
   
    // this.geolocation.getCurrentPosition(this.options).then((resp) => {
    //   this.latitude= resp.coords.latitude;
    //   this.longitude=resp.coords.longitude;
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });

    this.template=this.settings.GetTemplateForm();
    console.log( this.template);
    let group={}    
    this.template.detalle.forEach(input_template=>{
      group[input_template.controlName]=new FormControl('');  
      
    })
    this.myFormGroup = new FormGroup(group);
    
  }
  async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    console.log("this.latitude"+this.latitude);
    
  }
  async ionViewDidEnter(){

    
    this.platform.ready().then(() => {
   this.Init();
  });
   
  }

  onSubmit(){


    let request=<RequestTk>{};
     let requestItems=<RequestTkItem>{};
    
    request.latitude=this.latitude;
    request.longitude=this.longitude;
    request.login=this.settings.getValue(SettingsService.setting_User)
    
    request.templateId=this.template.cabecera.id;
    request.templateDescripcion=this.template.cabecera.descripcion;

    request.items=new Array();
    for (let key in this.myFormGroup.controls) {
      requestItems= <RequestTkItem>{};
      requestItems.id=key;
      requestItems.valor=this.myFormGroup.controls[key].value
      
      request.items.push(requestItems);      
    }
   console.log(this.myFormGroup.controls);



    let  postData = new FormData();
   
    let filename:string;
    
     let imageFile:any;
     
     this.Imagenes.forEach(function(img){
      filename="file"+img.id; 
      
      
      postData.append(filename, img.imageFile);
     }); 
      

    postData.append('tk', JSON.stringify(request));

    
    this.api.post("api/ticket/upload",postData).subscribe((result) => {
      var respuesta=JSON.parse(JSON.stringify(result)); 
      this.presentToast("Creo el tk " +respuesta.tk+ "!");
      this.router.navigateByUrl('home');
    });



} 

async openCamera(item){
  try {
    const profilePicture = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    });
   // this.guestPicture = profilePicture.base64String;
    
  const date = new Date().valueOf();    
  const imageName = date+ '.jpeg'; 
  let rImagen= <RequestImagen>{};
  rImagen.id=item;
  rImagen.imageData=profilePicture.base64String;
  rImagen.image=(<any>window).Ionic.WebView.convertFileSrc(profilePicture.base64String);
  let imageBlob:any;
  imageBlob =  this.dataURItoBlob(rImagen.imageData);

  rImagen.imageFile = new File([imageBlob], imageName, { type: 'image/jpeg' })
  
  this.Imagenes.push(rImagen);
  this.presentToast("Imagen Agregada!");
  } catch (error) {
    console.error(error);
    this.presentToast("Imagen no agregada!. ");
  }
/*

  const options: CameraOptions = {
  quality: 20,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE,
    }
 


  this.camera.getPicture(options).then((imageData) => {

  
  const date = new Date().valueOf();    
  const imageName = date+ '.jpeg'; 
  let rImagen= <RequestImagen>{};
  rImagen.id=item;
  rImagen.imageData=imageData;
  rImagen.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
  let imageBlob:any;
  imageBlob =  this.dataURItoBlob(rImagen.imageData);

  rImagen.imageFile = new File([imageBlob], imageName, { type: 'image/jpeg' })
  
  this.Imagenes.push(rImagen);
  this.presentToast("Imagen Agregada!");
  
  }, (err) => {
     
    this.presentToast("Imagen no agregada!. ");
});
*/

}
dataURItoBlob(dataURI) {
  const byteString = window.atob(dataURI);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const int8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    int8Array[i] = byteString.charCodeAt(i);
   }
  const blob = new Blob([int8Array], { type: 'image/jpeg' });    
 return blob;
}
async presentToast(msg) {
  const toast = await this.toastCtrl.create({
    message: msg,
    duration: 4000,//3000,
    position: 'top',
    //color: 'danger',
    cssClass: 'toast'
     //showCloseButton: true,
  //   closeButtonText: "OK",
  });
  toast.present();
       
}
async presentToastbottom(msg) {
  const toast = await this.toastCtrl.create({
    message: msg,
    duration: 4000,//3000,
    position: 'bottom',
    //color: 'danger',
    cssClass: 'toast'
     //showCloseButton: true,
  //   closeButtonText: "OK",
  });
  toast.present();
       
}

}