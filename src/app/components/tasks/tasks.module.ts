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


@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    TaskComponent,
    FiltersComponent,
    NavigationComponent,
    TaskCardComponent],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class TasksModule {
}
