import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Home/home.component';
import { TodosComponent } from './components/Todo/todos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todos', component: TodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
