import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Producto } from 'src/app/clases/producto/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public pathColeccion:string = "/productos"
  public referenciaAlaColeccion:AngularFirestoreCollection<Producto>;

  constructor(private bd:AngularFirestore) 
  { 
    this.referenciaAlaColeccion=bd.collection(this.pathColeccion);
  }

  public AgregarUno(nuevoUsuario:Producto)
  {
    return this.referenciaAlaColeccion.add({...nuevoUsuario});
  }

  public TraerTodos()
  {
     return this.referenciaAlaColeccion;
  }

  public BorrarUno(id:string)
  {
    return this.referenciaAlaColeccion.doc(id).delete();
  }

  public ModificarUno(id:string,usuario:Producto)
  {
    return this.referenciaAlaColeccion.doc(id).update(usuario);
  }




}
