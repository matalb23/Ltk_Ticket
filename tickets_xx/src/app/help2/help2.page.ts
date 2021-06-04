import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
@Component({
  selector: 'app-help2',
  templateUrl: './help2.page.html',
  styleUrls: ['./help2.page.scss'],
})
export class Help2Page implements OnInit {

  constructor( private  router:  Router) { }

  ngOnInit() {
  }
  anterior(){
    this.router.navigateByUrl('help');

  }
  siguiente(){
    this.router.navigateByUrl('help3');

  }

}