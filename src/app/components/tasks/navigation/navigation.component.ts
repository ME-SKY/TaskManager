import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Store} from '@ngrx/store';
import {State} from '../../../store/reducers/task.reducer';
import {Observable, Subject} from 'rxjs';
import {NavButtonsToggler} from '../../../models/nav-buttons';
import {toggleEditTask, toggleNavButtons} from '../../../store/actions/task.actions';
import {Task} from '../../../models/task';
import {distinctUntilChanged, takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {


  leftMarginVh = 2;

  buttons$: Observable<NavButtonsToggler>;
  task$: Observable<Task>;
  subs = new Subject();

  currentTaskId: number;

  @HostListener('window:resize', ['$event'])
  getScreenWidth(): void {
    switch (this.location.path().split('/')[1]) {
      case 'task':
        this.leftMarginVh = 0;
        break;
      case 'add-task':
        this.leftMarginVh = 0;
        break;
      case 'manage-tasks':
        this.leftMarginVh = window.innerWidth <= 600 ? 0 : 2;
        break;
      default:
        break;
    }
  }

  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private store: Store<{ tasks: State}>) {
    this.buttons$ = this.store.select(state => state.tasks.navigationButtons);
    this.task$ = this.store.select(state => state.tasks.task);
    this.task$.pipe(
      takeUntil(this.subs),
      distinctUntilChanged()
    ).subscribe(x => {
      this.currentTaskId = x.id;
    });

    this.location.onUrlChange(
    (url, state) => {
      switch (url.split('/')[1]) {
        case 'task':
          this.store.dispatch(toggleNavButtons({
            buttons: {
              back: true,
              new_task: false,
              edit_task: true,
              delete_task: true
            }
          }));
          this.leftMarginVh = 0;
          break;
        case 'manage-tasks':
          this.store.dispatch(toggleNavButtons({
            buttons: {
              back: false,
              new_task: true,
              edit_task: false,
              delete_task: false
            }
          }));
          this.leftMarginVh = window.innerWidth <= 600 ? 0 : 2;
          break;
        case 'list':
          this.leftMarginVh = 2;
          break;
        case 'edit':
          this.store.dispatch(toggleNavButtons({
            buttons: {
              back: true,
              new_task: false,
              edit_task: false,
              delete_task: false
            }
          }));
          break;
        default:
          break;
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.subs.next();
    this.subs.complete();
  }

  editTask(): void {
    this.store.dispatch(toggleEditTask({edit: true}));
    this.store.dispatch(toggleNavButtons({
      buttons: {
        back: true,
        new_task: false,
        edit_task: false,
        delete_task: false
      }
    }));
  }

  createTask(): void {
    this.store.dispatch(toggleNavButtons({
      buttons: {
        back: true,
        new_task: false,
        edit_task: false,
        delete_task: false
      }
    }));
    this.leftMarginVh = 0;
    this.store.dispatch(toggleEditTask({edit: true}));
  }
}
