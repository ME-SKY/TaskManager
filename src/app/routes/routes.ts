import {Routes} from '@angular/router';
import {TaskComponent} from '../components/tasks/task/task.component';
import {ManageTasksComponent} from '../components/tasks/manage-tasks/manage-tasks.component';


export const ROUTES: Routes = [
  {path: 'manage-tasks', component: ManageTasksComponent},
  {path: 'task/:id', component: TaskComponent},
  {path: 'add-task', component: TaskComponent},
  {path: '', redirectTo: '/manage-tasks', pathMatch: 'full'}
];
