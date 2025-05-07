import { Component, Input } from '@angular/core';
import { TodoItemComponent } from "../Todo-Item/todo-item.component";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [TodoItemComponent]
})
export class TodoListComponent {
  @Input() todos: any[] = [];
}
