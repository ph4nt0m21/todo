import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{
  tasks: Task[] = [];
  editedTask: Task|null = null;

  constructor(private taskservice: TaskService){

  }
 
  ngOnInit(): void {
    this.taskservice.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task){
    this.taskservice.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskservice.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task){
    this.taskservice.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }

  editTask(task: Task){
    this.editedTask = task;
  }

  updateTask(task: Task){
    this.taskservice.updateTask(task).subscribe((updatedTask) => {
      const index = this.tasks.findIndex((t) => t.id === updatedTask.id);
      if(index !== -1){
        this.tasks[index] = updatedTask;
      }
      this.editedTask = null;
    });
  }

  cancelEdit(){
    this.editedTask = null;
  }
}
