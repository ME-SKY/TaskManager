import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }


  getTasks(): Observable<Task[]> {
    return this.http.get('assets/tasks.json').pipe(map(data => {
      let tasks = data['tasks'];
      console.log(tasks);
      return tasks.map(task => new Task(task));
    }));
  }

  getTasksByPage(pageNumber: number = 0): Observable<Task[]> {
    return this.http.get(`assets/tasks${pageNumber}.json`)
      .pipe(
        map(data => {
          let tasks = data['tasks'];
          return tasks.map(task => new Task(task));
        }));
  }
}
