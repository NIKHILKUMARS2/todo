import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { ToastController} from 'ionic-angular';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
       
    private todos =[];
    private archivedTodos = [];   

  constructor(private toastController: ToastController,public http: HttpClient) {
    console.log('Hello TodoProvider Provider');
  }
  
   archivedTodoBack(todoIndex){
	let archivedTodoToBeBack= this.archivedTodos[todoIndex];
	this.archivedTodos.splice(todoIndex,1);
    this.todos.push(archivedTodoToBeBack);	
   }





  archiveDeleteTodo(todoIndex){
      this.archivedTodos.splice(todoIndex,1);       
            let deleteArchivedTodoToast = this.toastController.create({
      message: "Todo Archived is Permanently Deleted",
      duration: 2000
      });
      deleteArchivedTodoToast.present();
      
  }


  archiveTodo(todoIndex){
     let todoToBeArchived= this.todos[todoIndex];
     this.todos.splice(todoIndex,1);
     this.archivedTodos.push(todoToBeArchived);
  }


  getTodos(){
     return this.todos;
  }

  getArchivedTodos(){
     return this.archivedTodos;
  }

  addTodo(todo){
     this.todos.push(todo);
  }

  editTodo(todo,todoIndex){
  this.todos[todoIndex] = todo;
  }

}
