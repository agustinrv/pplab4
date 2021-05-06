import { Injectable } from '@angular/core';
import {HttpClient} from"@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  public datosGithub:any;

  constructor(private http:HttpClient) { 

    
  }

  public getDatos()
  {
      return this.http.get('https://api.github.com/users/agustinrv');
  }
}
