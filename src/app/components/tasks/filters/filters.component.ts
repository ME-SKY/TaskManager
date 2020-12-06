import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  priorities = [
    {name: 'Low'},
    {name: 'Normal'},
    {name: 'High'}
  ];

  tags = [
    {name: 'Research'},
    {name: 'Design'},
    {name: 'Development'}
  ];

  filters = new FormGroup({
    sortOld: new FormControl(false),
    sortNew: new FormControl(true),
    priority: new FormControl([this.priorities[1]]),
    tag: new FormControl([this.tags[1], this.tags[0]])
  });

  constructor() {
  }

  ngOnInit(): void {
  }

}
