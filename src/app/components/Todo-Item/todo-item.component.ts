import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: any;
}
