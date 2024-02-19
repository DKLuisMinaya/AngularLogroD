import { Component, OnInit } from '@angular/core';
import { Servicio1Service } from '../servicio/servicio1.service';

@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent {
  rtipo:any;
  mostrar:any;
  constructor( private Service1:Servicio1Service){}
  ngOnInit(): void {
    this.mostrarDatos();
  }

  mostrarDatos(){
    this.Service1.mostrar().subscribe({
      next:(data:any)=>{
        this.mostrar=data.type
      },
      error:(e)=>{
        debugger
      }
    })
  }

  registerP(name:any, apellido:any, cedula:any, email:any, telefono:any, especialidad:any, tipo:any){
    debugger
    this.Service1.saveTipo(name.value, apellido.value, cedula.value, email.value, telefono.value, especialidad.value, tipo.value).subscribe({
      next:(data:any)=>{
        this.rtipo=data.message
      },
      error:(e)=>{
        debugger
      }
    })
  }
}
