import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
@Component({
  selector: 'app-help4',
  templateUrl: './help4.page.html',
  styleUrls: ['./help4.page.scss'],
})
export class Help4Page implements OnInit {

  constructor( private  router:  Router) { }

  ngOnInit() {
  }
  anterior(){
    this.router.navigateByUrl('help3');

  }
  siguiente(){
    this.router.navigateByUrl('home');

  }

}
