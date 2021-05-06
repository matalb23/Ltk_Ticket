import { Component } from '@angular/core';
import { Router } from  "@angular/router";
@Component({
  selector: 'app-help4',
  templateUrl: './help4.page.html',
  styleUrls: ['./help4.page.scss'],
})
export class Help4Page {

  constructor( private  router:  Router) { }

 
  anterior(){
    this.router.navigateByUrl('help3');

  }
  siguiente(){
    this.router.navigateByUrl('home');

  }

}
