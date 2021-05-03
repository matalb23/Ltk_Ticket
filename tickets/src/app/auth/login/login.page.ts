import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
const { Network } = Plugins;
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements   OnInit, OnDestroy  {
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;
  async ngOnInit() {
    console.log("entro  a ngOnInit");
    this.networkListener = Network.addListener('networkStatusChange', (status) => {
      console.log("Network status changed", status);
      this.networkStatus = status;
    });

    this.networkStatus = await Network.getStatus();
  }

  ngOnDestroy() {
    this.networkListener.remove();
  }

  constructor(private  authService:  AuthService, private  router:  Router) { }

  login(form){
    
    this.authService.login(form.value).subscribe((res)=>{
    
      this.router.navigateByUrl('help');
    });
  }

}
