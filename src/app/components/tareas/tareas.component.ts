import { Component } from '@angular/core';
import { Tarea } from '../../models/Tarea';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
listaTareas: Tarea[] = [];
nombreTarea = "";

constructor(){}

agregarTarea(){
  const tarea: Tarea = {
    nombre: this.nombreTarea,
    estado: false
  }
  this.listaTareas.push(tarea);
  this.nombreTarea = "";
}

eliminarTarea(i:number){
  this.listaTareas.splice(i,1);
}

actualizarTarea(i:number, tarea:Tarea){
this.listaTareas[i].estado = !tarea.estado;
}
}
