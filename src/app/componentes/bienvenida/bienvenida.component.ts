import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/servicios/github/github.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  public datosGithub:any="";
  public foto:string="";
  constructor(private servicioGithub:GithubService) { 

  }

  ngOnInit(): void {
   this.servicioGithub.getDatos().subscribe((data)=>{
     this.datosGithub=data;
    });
  }



}
