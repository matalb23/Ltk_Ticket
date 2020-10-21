import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthService} from './auth/auth.service';
import { Router } from  "@angular/router";
import {SettingsService} from './service/settings.service';
import { User } from './auth/user';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth:AuthService,
    private  router:  Router
    ,private settings:SettingsService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      
      this.auth.authSubject.subscribe(state => {
        if (state) {
            console.log("user is logged in");
            this.router.navigateByUrl('home');
            
        } else {
            console.log("user is NOT logged in");
           var user={} as User;
           user.login=this.settings.getValue(SettingsService.setting_User);           
           user.password=this.settings.getValue(SettingsService.setting_UserPass);
         

           this.auth.login(user).subscribe((res)=>{   
             
             this.router.navigateByUrl('home'); 
             
             
      
           }
           ,error=>{
             
             this.router.navigateByUrl('login');  }
           );
           
        }
    });
    this.splashScreen.hide();
    
    });
  }
}
