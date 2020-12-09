import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from '../../../services/http.service';
import {fromEvent, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {Task} from '../../../models/task';
import {Store} from '@ngrx/store';
import {addTasks, setCurrentTask, toggleEditTask} from '../../../store/actions/task.actions';
import {State} from '../../../store/reducers/task.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  tasks: Task[] = [
    {
      id: 1,
      name: 'Жизнь, течение, волны, облака, свет',
      priority: 1,
      tags: ['Research', 'Design'],
      createdDate: new Date(Date.now()),
      description: 'Переобразуемое необразуемое, виданное невиданное, формирование групп интерференциональных межсветовых массовых амбивалентных пространств'
    },
    {
      id: 2,
      name: 'Множественный межпространственный фильтр альфа-частиц',
      priority: 0,
      tags: ['Research', 'Development'],
      createdDate: new Date(Date.now()),
      description: 'Переобразуемое необразуемое, виданное невиданное, формирование групп интерференциональных межсветовых массовых амбивалентных пространств,+Переобразуемое необразуемое, виданное невиданное, формирование групп интерференциональных межсветовых массовых амбивалентных пространств +Переобразуемое необразуемое, виданное невиданное, формирование групп интерференциональных межсветовых массовых амбивалентных пространств +Переобразуемое необразуемое, виданное невиданное, формирование групп интерференциональных межсветовых массовых амбивалентных пространств'
    },
    {
      id: 3,
      name: 'Преобразовать неприобразумое',
      priority: 2,
      tags: ['Research'],
      createdDate: new Date(Date.now()),
      description: 'Переобразуемое необразуемое, виданное невиданное, формирование групп интерференциональных межсветовых массовых амбивалентных пространств'
    }
  ];

  tasks$: Observable<Task[]>;
  scrollSub;
  page = 1;
  totalPages = 4;

  constructor(private httpService: HttpService,
              private store: Store<{tasks: State}>) {
    this.tasks$ = store.select(state => state.tasks.tasks);
  }

  ngOnInit(): void {
    this.httpService.getTasksByPage(1).subscribe(tasks => this.store.dispatch(addTasks({tasksToAdd: tasks})));
    this.scrollSub = fromEvent(window, 'scroll')
      .pipe(
        filter(() => {
            return (document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight - 200);
        })
      ).subscribe(() => {

        if (!(this.page >= this.totalPages)){

          this.page += 1;

          this.httpService.getTasksByPage(this.page)
            .subscribe(tasks => {
              this.store.dispatch(addTasks({tasksToAdd: tasks}));
            });
        }
      });
  }

  ngOnDestroy(): void {
    this.scrollSub.unsubscribe();
  }


  setTask(task: Task): void {
    this.store.dispatch(setCurrentTask({currentTask: task}));
    this.store.dispatch(toggleEditTask({edit: false}));
  }
}
