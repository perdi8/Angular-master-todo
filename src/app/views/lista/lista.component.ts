import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  mensaje: string = '';
  fecha: Date = new Date();
  gradoImportancia: number = 4;
  completado= false;

  tareasCompletadas: Todo[] = [];
  tareasIncompletas: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  lista($event) {
    this.tareasIncompletas.push($event)
    this.tareasCompletadas.splice(0)
  }

  crearTarea(): void {
    let nuevaTarea = new Todo(this.mensaje, this.fecha, this.gradoImportancia, this.completado);
    this.tareasCompletadas.push(nuevaTarea);
  }

}
