import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {ListComponent} from './list/list.component';
import {TaskComponent} from './task/task.component';
import {FiltersComponent} from './filters/filters.component';
import {RouterModule} from '@angular/router';
import {NavigationComponent} from './navigation/navigation.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TaskCardComponent} from './task-card/task-card.component';
import {ManageTasksComponent} from './manage-tasks/manage-tasks.component';
import {TaskFormComponent} from './task/task-form/task-form.component';
import {PipesModule} from '../../pipes/pipes.module';

export const Priorities = [
  {name: 'Low'},
  {name: 'Normal'},
  {name: 'High'}
];

export const Tags = [
  {name: 'Research'},
  {name: 'Design'},
  {name: 'Development'}
];


@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    TaskComponent,
    FiltersComponent,
    NavigationComponent,
    TaskCardComponent,
    ManageTasksComponent,
    TaskFormComponent],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    PipesModule,
  ]
})
export class TasksModule {
}
