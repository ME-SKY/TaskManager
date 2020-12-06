import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../list/list.component';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input() task: Task;

  constructor() {
  }

  ngOnInit(): void {
  }

}
