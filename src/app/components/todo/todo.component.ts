import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() tarea: Todo;
  @Output() eventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  completar(): void {
    this.tarea.completar();
    this.eventEmitter.emit(this.tarea)
  }

  getColor(): string {
    switch (this.tarea.gradoImportancia) {
      case 1:
        return '#EF4816';
      case 2:
        return '#EA631F';
      case 3:
        return '#EEAE38';
      default:
        return '#57B9B0';
    }
  }



}
