import { LoginComponent } from './componentes/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { AltaProductoComponent } from './componentes/producto/alta-producto/alta-producto.component';

const routes: Routes = [

  {path: '', redirectTo: 'bienvenida', pathMatch: 'full'},
  
  {path:"bienvenida",component:BienvenidaComponent},
  {path:"login",component:LoginComponent},
  {path:"altaproducto",component:AltaProductoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
