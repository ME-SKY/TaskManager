import {Component, HostListener, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Task} from '../../../../models/task';
import {State} from '../../../../store/reducers/task.reducer';
import {Store} from '@ngrx/store';
import {distinctUntilChanged} from 'rxjs/operators';
import {addTask, updateTask} from '../../../../store/actions/task.actions';
import {Router} from '@angular/router';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private store: Store<{ tasks: State }>,
              private router: Router) {

    this.textAreaWidth = window.innerWidth - 50;
    this.taskForm = this.formBuilder.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      priority: [1, Validators.required],
      tags: [['']]
    });
  }

  @Input() task: Task;
  @Input() create;

  readOnly = true;

  priorities = [
    {name: 'Low'},
    {name: 'Normal'},
    {name: 'High'}
  ];

  tags = [
    {name: 'Research'},
    {name: 'Design'},
    {name: 'Development'}
  ];

  textAreaWidth = 200;

  taskForm: FormGroup;

  @HostListener('window:resize', ['$event'])
  getScreenWidth(): void {
    this.textAreaWidth = window.innerWidth - 50;
  }

  ngOnInit(): void {

    this.task.id && this.taskForm.setValue({
      id: this.task.id,
      name: this.task.name,
      description: this.task.description,
      priority: this.task.priority,
      tags: this.task.tags
    });


    this.store.select(state => state.tasks.editTask).pipe(
      distinctUntilChanged()
    ).subscribe(editTask => {
      this.readOnly = !editTask;
      if (this.readOnly) {
        this.taskForm.controls.name.disable();
        this.taskForm.controls.description.disable();
        this.taskForm.controls.priority.disable();
        this.taskForm.controls.tags.disable();
      } else {
        this.taskForm.controls.name.enable();
        this.taskForm.controls.description.enable();
        this.taskForm.controls.priority.enable();
        this.taskForm.controls.tags.enable();
      }
    });
  }

  save(): void {
    const taskData = new Task({
      ...this.taskForm.getRawValue(),
      createdDate: this.create ? new Date(Date.now()).toJSON() : this.task.createdDate
    });
    if (this.create) {
      this.store.dispatch(addTask({newTask: taskData}));
    } else {
      this.store.dispatch(updateTask({data: taskData, id: taskData.id}));
    }

    this.router.navigate(['/manage-tasks']);
  }
}
