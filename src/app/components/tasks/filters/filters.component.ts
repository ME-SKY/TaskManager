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

  sort: FormControl = new FormControl('asc');
  // filters = new FormGroup({
  sortOld: FormControl = new FormControl(false);
  sortNew: FormControl = new FormControl(true);

  priorityForm: FormGroup = new FormGroup({
    low: new FormControl(false),
    normal: new FormControl(true),
    high: new FormControl(false)
  });

  tagsForm: FormGroup = new FormGroup({
    research: new FormControl(false),
    design: new FormControl(false),
    development: new FormControl(false)
  });

  constructor() {
  }

  ngOnInit(): void {
  }

}
