import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public usuarioLogin:any;

  public constructor(private router:Router)
  {
     
  }

  
  ngOnInit()
  { 
    
    this.usuarioLogin = localStorage.getItem("usuarioLogin");

    if(!this.usuarioLogin)
    {
      this.router.navigateByUrl("login");
    }
  }

  LogOut()
  {
      localStorage.removeItem("usuarioLogin");
      location.href="login";
      //this.router.navigateByUrl("login");
  }


}
