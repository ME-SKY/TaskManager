import {createAction, props} from '@ngrx/store';
import {Task} from '../../models/task';
import {NavButtonsToggler} from '../../models/nav-buttons';

export const addTasks = createAction(
  '[Task Manager] AddTasks',
  props<{ tasksToAdd: Task [] }>()
);

export const setCurrentTask = createAction(
  '[Task Manager] SetCurrentTask',
  props<{ currentTask: Task }>()
);

export const updateTask = createAction(
  '[Task Manager] UpdateTask',
  props<{ data: Task, id: number }>()
);

export const addTask = createAction(
  '[Task Manager] AddTask',
  props<{ newTask: Task }>()
);

export const removeCurrentTask = createAction(
  '[Task Manager] RemoveCurrentTask'
);

export const toggleNavButtons = createAction(
  '[Task Manager] ToggleNavButtons',
  props<{ buttons: NavButtonsToggler }>()
);

export const toggleEditTask = createAction(
  '[Task Manager] ToggleEditButtons',
  props<{ edit: boolean }>()
);
