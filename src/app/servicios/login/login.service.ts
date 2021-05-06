import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Usuario } from 'src/app/clases/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public pathColeccion:string = "/usuarios"
  public referenciaAlaColeccion: AngularFirestoreCollection<Usuario>;


  public constructor(private bd:AngularFirestore) 
  {
    this.referenciaAlaColeccion = bd.collection(this.pathColeccion);
  }

  public AgregarUno(nuevoUsuario:Usuario)
  {
      return this.referenciaAlaColeccion.add({...nuevoUsuario});
  }

  public TraerTodos()
  {
     return this.referenciaAlaColeccion;
  }

  public BuscarUsuarioCorreo(user: Usuario) {
    return this.bd.collection(this.pathColeccion, ref => ref.where("correo", "==", user.correo));    
  }

  public BorrarUno(id:string)
  {
    return this.referenciaAlaColeccion.doc(id).delete();
  }

  public ModificarUno(id:string,usuario:Usuario)
  {
      return this.referenciaAlaColeccion.doc(id).update(usuario);
  }

  public BuscarUnoLogin(user: Usuario) {
    const found = this.bd.collection(this.pathColeccion, ref =>
      ref.where("correo", "==", user.correo).where("contrasenia", "==", user.contrasenia));
    return found;
  }

}
