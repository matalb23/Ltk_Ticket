import { Component } from '@angular/core';
import { Router } from  "@angular/router";
@Component({
  selector: 'app-help2',
  templateUrl: './help2.page.html',
  styleUrls: ['./help2.page.scss'],
})
export class Help2Page  {

  constructor( private  router:  Router) { }

  anterior(){
    this.router.navigateByUrl('help');

  }
  siguiente(){
    this.router.navigateByUrl('help3');

  }

}