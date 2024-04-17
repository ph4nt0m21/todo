import { Component, Input, OnInit, Output, EventEmitter, output } from '@angular/core';
import { Task } from '../../Task';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit{
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  faEdit = faEdit;

  constructor(){

  }
 
  ngOnInit(): void {

  }

  onDelete(task:Task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }

  editTask(task: Task){
    this.onEditTask.emit(task);
  }
}
