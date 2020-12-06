import {Routes} from '@angular/router';
import {ListComponent} from '../components/tasks/list/list.component';
import {TaskComponent} from '../components/tasks/task/task.component';


export const ROUTES: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'task', component:  TaskComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];
