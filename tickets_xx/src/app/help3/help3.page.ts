import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
@Component({
  selector: 'app-help3',
  templateUrl: './help3.page.html',
  styleUrls: ['./help3.page.scss'],
})
export class Help3Page implements OnInit {

  constructor( private  router:  Router) { }

  ngOnInit() {
  }
  anterior(){
    this.router.navigateByUrl('help2');

  }
   siguiente(){
    this.router.navigateByUrl('help4');

  }

}