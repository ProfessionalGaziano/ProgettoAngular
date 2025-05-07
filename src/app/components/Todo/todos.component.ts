import { Component } from '@angular/core';
import { TodoListComponent } from "../Todo-List/todo-list.component";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  imports: [TodoListComponent]
})
export class TodosComponent {
  todos = [
    { id: 1, text: 'Fare i compiti', done: false },
    { id: 2, text: 'Fare la spesa', done: true },
    { id: 3, text: 'Studiare Angular', done: false }
  ];
 }
