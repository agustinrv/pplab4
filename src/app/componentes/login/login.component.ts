import { Usuario } from 'src/app/clases/usuario/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public unUsuario:Usuario=new Usuario(); 

  constructor(private servicioLogin:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  
 


  public Login() {

      this.unUsuario.correo=$("#textCorreo").val()?.toString()??"";// solo para inicio rapido
      this.unUsuario.contrasenia=$("#textContraseña").val()?.toString()??""; //solop para inicio rapido

    this.servicioLogin.BuscarUnoLogin(this.unUsuario).valueChanges().subscribe(result => {
      if (result.length == 1) {
        localStorage.setItem('usuarioLogin', this.unUsuario.correo);
        location.href="/bienvenida";
      }
      else {
        window.alert("Error usuario o contraseña invalido");
      }
    });
  }

  public InicioRapidoAdmin()
  {
    $("#textCorreo").val("admin@gmail.com");
    $("#textContraseña").val("123456");
  }

  public InicioRapidoEmpleado1()
  {
    $("#textCorreo").val("empleado@gmail.com");
    $("#textContraseña").val("123456");
  }

  public InicioRapidoEmpleado2()
  {
    $("#textCorreo").val("a@a.com");
    $("#textContraseña").val("123456");
  }



}
