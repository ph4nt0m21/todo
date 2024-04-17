import { Component,Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent implements OnInit{
 
  @Input() task!: Task;
  @Output() onUpdateTask: EventEmitter<Task> = new EventEmitter();
  @Output() onCancelEdit: EventEmitter<void> = new EventEmitter();

  editedTask!: Task;

  ngOnInit(): void {
    this.editedTask = {...this.task};
  }

  onSubmit(){
    this.onUpdateTask.emit(this.editedTask);
  }

  cancelEdit(){
    this.onCancelEdit.emit();
  }
}
