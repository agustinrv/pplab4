import { Producto } from './../../../clases/producto/producto';
import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises/paises.service';
import { ProductoService } from 'src/app/servicios/producto/producto.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {

  public listaProductos:Producto[]=[];
  public listaPaises:any=[];
  public paisSeleccionado:any=false;
  public nuevoProducto:Producto=new Producto();

  constructor(private servicioPaises:PaisesService,private servicioProducto:ProductoService) 
  {

  }

  ngOnInit(): void {
    this.servicioPaises.getPaises().subscribe((data)=>{
      this.listaPaises=JSON.parse(JSON.stringify(data));
    });
    this.TraerTodos();
  }

  public SeleccionarPais($event)
  {
      this.paisSeleccionado=$event;
      //this.nuevoProducto.pais=$event.name;
  }

  public AgregarProducto()
  {
    this.servicioProducto.AgregarUno(this.nuevoProducto).then(()=>{
     this.nuevoProducto=new Producto();
     this.paisSeleccionado=false;
     this.TraerTodos();
    });
    alert("Agregado"); 
  }

  public TraerTodos()
  {
    this.servicioProducto.TraerTodos().valueChanges().subscribe((data)=>{
        this.listaProductos=data;
    });
  }

}
