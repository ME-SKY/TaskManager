import {Component, OnDestroy, OnInit} from '@angular/core';
import {Task} from '../../../models/task';
import {Observable, Subject} from 'rxjs';
import {distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {State} from '../../../store/reducers/task.reducer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnDestroy {

  task: Task = new Task({});
  task$: Observable<Task>;
  create = false;
  subs = new Subject();

  constructor(private tasksStore: Store<{ tasks: State }>,
              private router: Router) {
    this.task$ = tasksStore.select(state => state.tasks.task);
  }


  ngOnInit(): void {
    if (history.state.create) {
      this.create = history.state.create;
    }

    this.task$.pipe(
      takeUntil(this.subs),
      distinctUntilChanged()
    ).subscribe(x => {
      if (x.id === undefined && !this.create) {
        this.router.navigate(['/manage-tasks']);
      }
    });
  }

  ngOnDestroy(): void {
    this.subs.next();
    this.subs.complete();
  }
}
