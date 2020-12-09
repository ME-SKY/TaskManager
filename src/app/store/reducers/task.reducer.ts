import {createReducer, on, ReducerManager} from '@ngrx/store';
import {addTask, addTasks, removeCurrentTask, setCurrentTask, toggleEditTask, toggleNavButtons, updateTask} from '../actions/task.actions';
import {Task} from '../../models/task';
import {NavButtonsToggler} from '../../models/nav-buttons';

export const InitialNavButtons: NavButtonsToggler = {
  back: false,
  new_task: true,
  edit_task: false,
  delete_task: false
};

export interface State {
  tasks: Task[];
  task: Task;
  editTask: boolean;
  navigationButtons: NavButtonsToggler;
}
export const initialState: State = {
  tasks: [],
  task: new Task({}),
  editTask: false,
  navigationButtons: InitialNavButtons
};

const _taskReducer = createReducer(
  initialState,
  on(addTasks, (state, {tasksToAdd}) => ({...state, tasks: [...state.tasks, ...tasksToAdd]})),
  on(setCurrentTask, (state, {currentTask}) => ({...state, task: currentTask})),
  on(removeCurrentTask, (state) => ({...state, task: new Task({})})),
  on(toggleNavButtons, (state, {buttons}) => ({...state, navigationButtons: buttons})),
  on(updateTask, (state, {data, id}) => ({
    ...state,
    tasks: state.tasks.map(task => task.id === id ? {task, ...data} : task)
  })),
  on(addTask, (state, {newTask}) => ({...state, tasks: [...state.tasks, newTask]})),
  on(toggleEditTask, (state, {edit}) => ({...state, editTask: edit}))
  // on(decrement, (state) => state - 1),
  // on(reset, (state) => 0)
);

export function taskReducer(state, action) {
  return _taskReducer(state, action);
}
