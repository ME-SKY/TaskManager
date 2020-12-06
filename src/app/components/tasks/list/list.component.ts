import {Component, OnInit} from '@angular/core';

export interface Task {
  name: string;
  priority: number;
  tags: string[];
  createdDate: Date;
  description: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks: Task[] = [
    {
      name: 'Жизнь, течение, волны, облака, свет',
      priority: 1,
      tags: ['Research', 'Design'],
      createdDate: new Date(Date.now()),
      description: 'Переобразуемое необразуемое, виданное невиданное, формирование групп интерференциональных межсветовых массовых амбивалентных пространств'
    },
    {
      name: 'Множественный межпространственный фильтр альфа-частиц',
      priority: 0,
      tags: ['Research', 'Development'],
      createdDate: new Date(Date.now()),
      description: 'Переобразуемое необразуемое, виданное невиданное, формирование групп интерференциональных межсветовых массовых амбивалентных пространств,+Переобразуемое необразуемое, виданное невиданное, формирование групп интерференциональных межсветовых массовых амбивалентных пространств +Переобразуемое необразуемое, виданное невиданное, формирование групп интерференциональных межсветовых массовых амбивалентных пространств +Переобразуемое необразуемое, виданное невиданное, формирование групп интерференциональных межсветовых массовых амбивалентных пространств'
    },
    {
      name: 'Преобразовать неприобразумое',
      priority: 2,
      tags: ['Research'],
      createdDate: new Date(Date.now()),
      description: 'Переобразуемое необразуемое, виданное невиданное, формирование групп интерференциональных межсветовых массовых амбивалентных пространств'
    }
  ];
  constructor() {
  }

  ngOnInit(): void {
  }

}
