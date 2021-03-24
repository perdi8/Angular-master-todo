
import { ITodo } from './itodo.interface';

export class Todo implements ITodo {
  mensaje: string;
  fecha: Date;
  gradoImportancia: number;
  completada: boolean;


  constructor(mensaje: string, fecha: Date, gradoImportancia: number, completada: boolean) {
    this.mensaje = mensaje;
    this.fecha = fecha;
    this.gradoImportancia = gradoImportancia;
    this.completada = completada;
  }

  mostrarTodo(): string {
    return `Todo: ${this.mensaje}\n¿Completada?: ${this.completada}`
  }

  completar(): void {
    this.completada = !this.completada;

  }

}
